import { Document } from "mongoose";
import IAuthor from "./IAuthor";
export interface IPost extends Document {
  title: string;
  description: string;
  poster: string;
  content: string;
  tags: Array<string>;
  reading_time: number | string;
  info: {
    view: string | number;
    like: string | number;
    author: IAuthor;
  };
}
