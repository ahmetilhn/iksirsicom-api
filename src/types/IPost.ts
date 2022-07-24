import { Document } from "mongoose";
import IAuthor from "./IAuthor";
import ILike from "./ILike";
import IView from "./IView";
export interface IPost extends Document {
  title: string;
  description: string;
  poster?: string;
  content: string;
  tags?: Array<string>;
  reading_time?: number | string;
  info: {
    view?: IView;
    like?: ILike;
    author: IAuthor;
  };
}
