import Document from "mongoose";

export default interface UserDoc extends Document {
  fullURL: string;
  shortenedURL: string;
  clicks: number;
}
