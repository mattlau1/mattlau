import { isValidURL } from "./isValidURL";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"
import serverless from 'serverless-http';
import ShortUrl from "./models/ShortUrl";
import Users from "./models/Users";

require("dotenv").config();

const LOCAL = true;

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  // origin: "https://www.mattlau.tech",
  credentials: true,
  optionSuccessStatus: 200,
};

mongoose
  .connect(process.env.URI || "")
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the mattlau.tech API v3.1");
});

app.get("/test1", async (req, res) => {
  res.send("Simple test to see if another route works");
});

app.get("/test2", async (req, res) => {
  // console.log(process.env);
  // console.log("---------------------");
  // console.log(process.env.URI);
  const link = await ShortUrl.findOne({ fullURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
  if (link) {
    res.send(link.shortenedURL);
  } else {
    res.send("Could not fetch from db")
    console.log(ShortUrl.collection.dbName)
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
  bcrypt.compare(req.body.password, user.password, (err, result) => {

    // correct credentials - generate jwt and return token + 200 status
    if (result === true) {

      // check if secret key is there
      if (!process.env.SECRET_KEY) return res.sendStatus(400);

      // generate jwt with 12h expiration
      const token = jwt.sign({ username: req.body.username }, process.env.SECRET_KEY, { expiresIn: "12h" });

      // add token to user document
      user.update({ token: token });

      // return token
      res.send({ token: token });
      return res.sendStatus(200);
    }
    return res.sendStatus(400);
  })
})

app.post("/upload", async (req, res) => {
  if (!req.headers.authorization) return res.sendStatus(400);

  // split Bearer out
  const token = req.headers.authorization.split(" ")[1];

  // check for bad split
  if (!token || token.length <= 1) return res.sendStatus(400);

  // check if secret key is there
  if (!process.env.SECRET_KEY) return res.sendStatus(400);

  try {
    // verify token
    jwt.verify(token, process.env.SECRET_KEY);
  } catch (e) {
    // bad token
    console.log(e);
    res.sendStatus(400);
    return;
  }

  // now token is valid, upload to S3 and return link


})

// https://www.npmjs.com/package/serverless
// https://www.npmjs.com/package/serverless-plugin-typescript
LOCAL ? app.listen(process.env.PORT || 5000) : module.exports.handler = serverless(app);



