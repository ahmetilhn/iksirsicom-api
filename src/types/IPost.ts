import { Document } from "mongoose";
import IAuthor from "./IAuthor";
import IContentElement from "./IContentElement";
export default interface IPost extends Document {
  title: string;
  description: string;
  poster: string;
  content: IContentElement[];
  reading_time: number | string;
  tags: Array<string>;
  info: {
    view?: number;
    like?: number;
    author: IAuthor;
  };
}
