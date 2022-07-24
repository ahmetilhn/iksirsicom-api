import { model, Schema } from "mongoose";
import { IPost } from "../types/IPost";

export default class PostModel {
  public postSchema = new Schema<IPost>({
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
  public Model = model<IPost>("Post", this.postSchema);
  public save(postData: IPost) {
    new this.Model(postData).save();
  }
}
