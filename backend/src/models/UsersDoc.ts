import Document from "mongoose";

export default interface UserDoc extends Document {
  username: string,
  password: string,
  token: string
}