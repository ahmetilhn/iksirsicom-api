import { Document } from "mongoose";
export default interface IView extends Document {
  ip_address: string;
}
