import { isValidURL } from "./isValidURL";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"
import serverless from 'serverless-http';
import ShortUrl from "./models/ShortUrl";
import Users from "./models/Users";
import multer from 'multer'
import multerS3 from 'multer-s3'
import bcrypt from "bcryptjs"
import { S3Client } from "@aws-sdk/client-s3"
import { exit } from "process";
require("dotenv").config();

const LOCAL = false;
const app = express();
const required_env = [
  "URI",
  "SECRET_KEY",
  "SECRET_ACCESS_KEY",
  "ACCESS_KEY_ID",
]

// check if all environment variables exist
required_env.map(key => {
  const env_var = process.env[key];
  if (!env_var) {
    console.log("Missing Environment Variable: " + key);
    exit(1);
  }
});

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID ? process.env.ACCESS_KEY_ID : "",
    secretAccessKey: process.env.SECRET_ACCESS_KEY ? process.env.SECRET_ACCESS_KEY : ""
  },
  region: 'ap-southeast-2'
});
console.log("Created S3 Client");

// CORS config
const corsOptions = {
  origin: LOCAL ? "http://localhost:3000" : "https://www.mattlau.dev",
  credentials: true,
  optionSuccessStatus: 200,
};

// multer file upload config
const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'zap.mattlau.dev',
    cacheControl: 'max-age=31536000',
    contentType: (req, file, cb) => {
      cb(null, file.mimetype);
    },
    key: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now().toString() + '/' + file.originalname);
    },
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 1000, // 1000 MB
  }
});

console.log("Configuration Complete")

// connect to mongoDB
mongoose
  .connect(process.env.URI || "")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the mattlau API v4.0");
});

app.get("/test1", async (req, res) => {
  res.send("Hello");
});

app.get("/test2", async (req, res) => {
  const link = await ShortUrl.findOne({ fullURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
  if (link) {
    res.send(link.shortenedURL);
  } else {
    res.send("Could not fetch from db")
  }
});

// shortens the given link, puts into db and returns url of shortened link
// if the shortened link already exists just return the existing one
// frontend has a route /:shortURL that gets the full url from backend and redirects to that
app.post("/shorten", async (req, res) => {
  if (!isValidURL(req.body.fullURL)) {
    res.sendStatus(400);
    return;
  }

  // check if url arleady exists
  const url = await ShortUrl.findOne({ fullURL: req.body.fullURL });
  if (url) {
    res.send({ url: url.shortenedURL });
    return;
  }

  // url doesnt exist, create entry and send shortened url
  const entry = await ShortUrl.create({ fullURL: req.body.fullURL });
  res.send({ url: entry.shortenedURL });
});

// gets the amount of clicks from a given short url
app.get("/clicks/:shortURL", async (req, res) => {
  const url = await ShortUrl.findOne({ shortenedURL: req.params.shortURL });
  if (url === null) return res.sendStatus(404);

  res.send({ clicks: url.clicks });
});

// gets the full url for a given short url
app.get("/full/:shortURL", async (req, res) => {
  const url = await ShortUrl.findOne({ shortenedURL: req.params.shortURL });
  if (url === null) return res.sendStatus(404);
  url.clicks++;
  url.save();

  res.send({ fullURL: url.fullURL });
});

// logs a user in and returns a signed jwt if credentials are valid
app.post("/login", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.sendStatus(404);
  }

  // get user document from username
  const user = await Users.findOne({ username: req.body.username });

  // check for invalid document from invalid username
  if (user === null) return res.sendStatus(400);

  // check that the encoded stored password is the same as the encoded body password
  bcrypt.compare(req.body.password, user.password, async (err, result) => {

    // correct credentials - generate jwt and return token
    if (result === true) {

      // check if secret key is there
      if (!process.env.SECRET_KEY) return res.sendStatus(400);

      // generate jwt with 12h expiration
      const token = jwt.sign({ username: req.body.username }, process.env.SECRET_KEY, { expiresIn: "12h" });

      // add token to user document
      user.token = token;
      await user.save();

      // return token
      res.send({ token: token });
      return;
    }

    if (err) {
      console.log(err);
    }
    return res.sendStatus(400);
  })
})

// uploads a file to AWS S3 Bucket via multer and multer-s3 (auth required)
app.post("/upload", upload.array('file', 32), async (req, res) => {
  if (!req.headers.authorization) return res.send({ status: 400, message: "Missing authorization header" });
  if (!req.files) return res.send({ status: 400, message: "Missing Files" });
  console.log("Processing files: ", req.files);

  // split Bearer out
  const token = req.headers.authorization.split(" ")[1];

  // check for bad split
  if (!token || token.length <= 1) return res.send({ status: 400, message: "Bad Split" });

  // check if secret key is there
  if (!process.env.SECRET_KEY) return res.send({ status: 400, message: "Missing Secret Key" });

  try {
    // verify token
    jwt.verify(token, process.env.SECRET_KEY);
  } catch (e) {
    // bad token
    console.log("Bad Token (Expired?)");
    res.send({ status: 400, message: "Expired Token" });
    return;
  }

  // now token is valid/not expired, check if token is from auth'd user
  const user = Users.findOne({ token: token });
  if (!user) {
    console.log("Bad Token (Unauthorised)");
    res.send({ status: 400, message: "Unauthorised" })
    return;
  }

  // https://github.com/expressjs/multer/issues/133#issuecomment-857294786
  const files = req.files as Express.Multer.File[];

  if (!files) {
    console.log("Files Undefined");
    res.send({ status: 400, message: "Files are undefined" });
    return;
  }
  // upload to S3 and return URLs
  console.log("Attempting Upload")
  res.send({
    message: "Uploaded!",
    urls: files.map((file) => ({
      // @ts-ignore
      url: file.location,
      name: file.filename,
      type: file.mimetype,
      size: file.size
    }))
  });
})

// https://github.com/dougmoscrop/serverless-http/issues/34#issuecomment-637040059
LOCAL ?
  app.listen(process.env.PORT || 5000)
  :
  module.exports.handler = serverless(app, {
    binary: [
      'image/png',
      'image/jpeg',
      'image/gif',
      'video/mp4',
      'audio/mpeg',
      'application/pdf',
      'video/webm',
      'audio/x-wav',
      'text/plain'
    ]
  });



