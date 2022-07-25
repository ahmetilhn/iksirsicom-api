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
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    reading_time: {
      type: Number || String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    info: {
      view: {
        type: Number,
        required: false,
      },
      like: {
        type: Number,
        required: false,
      },
      author: {
        full_name: String,
        user_name: String,
        avatar: String,
      },
    },
  });
  public Model = model<IPost>("Post", this.postSchema);
  public async create(postData: IPost) {
    return new this.Model(postData).save();
  }
  // Remove req add only id
  public async read(req: Request) {
    if (req.params.id) {
      return this.Model.findById(req.params.id).lean(true);
    } else {
      return this.Model.find().lean(true);
    }
  }
  public async update(id: string, postData) {
    return this.Model.findByIdAndUpdate(id, postData, { new: true });
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}
export default new PostModel();
