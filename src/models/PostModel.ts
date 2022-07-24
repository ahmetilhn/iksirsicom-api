import { model, Schema } from "mongoose";
import { IPost } from "../types/IPost";

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  reading_time: {
    type: Number || String,
    required: false,
  },
  info: {
    view: {
      type: Object,
      required: false,
    },
    like: {
      type: Object,
      required: false,
    },
    author: { full_name: String, user_name: String, avatar: String },
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
});

export default class PostModel {
  constructor(public postData: IPost) {
    this.postData = postData;
    model<IPost>("Post", postSchema);
  }
}
