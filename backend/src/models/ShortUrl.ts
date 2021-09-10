import mongoose from "mongoose";
import shortid from "shortid";
import URLDoc from "./URLDoc";
import randomWords from "random-words";

const URLSchema = new mongoose.Schema({
  fullURL: { type: String, required: true, unique: true },
  shortenedURL: {
    type: String,
    required: true,
    default: () => {
      return randomWords({ exactly: 3, join: "", maxLength: 4 });
    },
    unique: true,
  },
  clicks: { type: Number, required: true, default: 0 },
});

export default mongoose.model<URLDoc>("ShortUrl", URLSchema);
