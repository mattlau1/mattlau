import mongoose from "mongoose";
import UserDoc from "./UsersDoc";

const URLSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  token: { type: String, required: true, unique: true, default: "" }
});

export default mongoose.model<UserDoc>("Users", URLSchema);
