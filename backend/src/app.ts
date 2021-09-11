import { isValidURL } from "./isValidURL";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ShortUrl from "./models/ShortUrl";

require("dotenv").config();

const app = express();
const corsOptions = {
  origin: "https://www.mattlau.codes",
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
  res.send("Welcome to the mattlau.codes API v2.3");
});

app.get("/test1", async (req, res) => {
  res.send("Simple test to see if another route works");
});

app.get("/test2", async (req, res) => {
  console.log(process.env);
  console.log("---------------------");
  console.log(process.env.URI);
  const link = await ShortUrl.findOne({ fullURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
  if (link) {
    res.send(link.shortenedURL);
  }
});

// shortens the given link, puts into db and returns url of shortened link
// if the shortened link already exists just return the existing one
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

// gets the full url for a given short url
app.get("/full/:shortURL", async (req, res) => {
  const url = await ShortUrl.findOne({ shortenedURL: req.params.shortURL });
  if (url == null) return res.sendStatus(404);
  url.clicks++;
  url.save();

  res.send({ fullURL: url.fullURL });
});

// plan: frontend has a route /:shortURL that gets the full url from backend and redirects to that
app.listen(process.env.PORT || 5000);
