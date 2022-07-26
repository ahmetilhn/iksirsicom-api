import { Document } from "mongoose";

export default interface ISubscription extends Document {
  email: string;
}
