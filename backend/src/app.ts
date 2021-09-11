import { isValidURL } from "./isValidURL";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ShortUrl from "./models/ShortUrl";

require("dotenv").config();

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Access-Control-Allow-Origin"],
  exposedHeaders: ["Content-Type", "Access-Control-Allow-Origin"],
};

mongoose.connect(process.env.URI || "");

app.use(express.json());

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send("Welcome to the mattlau.codes API v2.2");
});

// shortens the given link, puts into db and returns url of shortened link
// if the shortened link already exists just return the existing one
app.post("/shorten", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.append("Access-Control-Allow-Origin", "http://localhost:3000");
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
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const url = await ShortUrl.findOne({ shortenedURL: req.params.shortURL });
  if (url == null) return res.sendStatus(404);
  url.clicks++;
  url.save();

  res.send({ fullURL: url.fullURL });
});

// plan: frontend has a route /:shortURL that gets the full url from backend and redirects to that
app.listen(process.env.PORT || 5000);
