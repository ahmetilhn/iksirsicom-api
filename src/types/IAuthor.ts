import { Document } from "mongoose";
export default interface IAuthor extends Document {
  full_name: string;
  user_name: string;
  avatar: string;
}
