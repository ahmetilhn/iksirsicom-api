import { Document } from "mongoose";
export default interface ILike extends Document {
  post_id: string;
  ip_address?: string;
}
