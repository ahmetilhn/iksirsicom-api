import { Schema, model } from "mongoose";
import ILike from "../types/ILike";
import { getIpAddress } from "../utils/ip-address.util";
import PostModel from "./PostModel";

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
  public async read(post_id: string) {
    return this.Model.find({ post_id: post_id });
  }
  public async create(likeData: ILike) {
    const like = new this.Model({
      ...likeData,
      ip_address: getIpAddress(),
    }).save();
    if (like) {
      return PostModel.update(likeData.post_id, { $inc: { "info.like": 1 } });
    }
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}

export default new LikeModel();
