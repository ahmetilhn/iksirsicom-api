import { Schema, model } from "mongoose";
import ILike from "../types/ILike";
import { getIpAddress } from "../utils/ip-address.util";
import PostModel from "./post.model";

class LikeModel {
  public likeSchema = new Schema<ILike>({
    post_id: {
      type: String,
      required: true,
    },
    ip_address: {
      type: String,
      required: true,
    },
  });
  public Model = model<ILike>("Like", this.likeSchema);
  public async read(postId?: string) {
    if (postId) {
      return this.Model.find({ post_id: postId }).lean();
    }
    return this.Model.find().lean();
  }
  public async create(payload: ILike) {
    const like = new this.Model({
      ...payload,
      ip_address: getIpAddress(),
    }).save();
    if (like) {
      return PostModel.update(payload.post_id, { $inc: { "info.like": 1 } });
    }
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}

export default new LikeModel();
