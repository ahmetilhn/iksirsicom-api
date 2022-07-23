import { Document } from "mongoose";
export default interface ILike extends Document {
  ip_address: string;
}
