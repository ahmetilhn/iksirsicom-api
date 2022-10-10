import { Document } from "mongoose";
import IAuthor from "./IAuthor";

export default interface IUser extends IAuthor, Document {
  email: string;
}
