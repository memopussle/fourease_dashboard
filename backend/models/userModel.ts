import { Schema, model } from "mongoose";
import { User } from "../Model/Models";

const userSchema = new Schema<User>(
  {
    first_name: { type: String, default: null, required: true },
    last_name: { type: String, default: null, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model<User>("User", userSchema);
export default User;
