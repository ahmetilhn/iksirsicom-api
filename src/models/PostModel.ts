import { Request } from "express";
import { model, Schema } from "mongoose";
import { IPost } from "../types/IPost";

class PostModel {
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
  public async create(postData: IPost) {
    return new this.Model(postData).save();
  }
  public async read(req: Request) {
    if (req.params.id) {
      return this.Model.findById(req.params.id).exec();
    } else {
      return this.Model.find();
    }
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}
export default new PostModel();
