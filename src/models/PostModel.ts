import { Request } from "express";
import { model, Schema } from "mongoose";
import { getReadingTime } from "../plugins/reading-time-calc.plugin";
import IPost from "../types/IPost";
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
    content: [
      {
        type: Object,
        required: true,
      },
    ],
    reading_time: {
      type: Number || String,
      required: true,
    },
    medium_link: {
      type: String,
      required: false,
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
  public async create(payload: IPost) {
    payload.reading_time = getReadingTime(payload.content);
    return new this.Model(payload).save();
  }
  // Remove req add only id
  public async read(req: Request) {
    if (req.params.id) {
      return this.Model.findById(req.params.id).lean(true);
    } else if (req.query.limit) {
      return this.Model.find().limit(Number(req.query.limit)).lean(true);
    }
    return this.Model.find().lean(true);
  }
  public async update(id: string, payload) {
    return this.Model.findByIdAndUpdate(id, payload, { new: true });
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}
export default new PostModel();
