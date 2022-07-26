import { Document } from "mongoose";
export default interface IView extends Document {
  post_id: string;
  ip_address?: string;
}
