import { Request } from "express";
import { Schema, model } from "mongoose";
import ILike from "../types/ILike";
import { getIpAddress } from "../utils/ip-address.util";
import PostModel from "./post.model";

class LikeModel {
  public likeSchema = new Schema<ILike>(
    {
      post_id: {
        type: String,
        required: true,
      },
      ip_address: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  public Model = model<ILike>("Like", this.likeSchema);
  public async read(req: Request): Promise<ILike | ILike[]> {
    if (req.params.id) {
      return this.Model.find({ post_id: req.params.id }).lean();
    }
    return this.Model.find().lean();
  }
  public async create(req: Request): Promise<ILike> {
    const payload: ILike = req.body;
    if (payload) {
      const like = new this.Model({
        ...payload,
        ip_address: getIpAddress(),
      }).save();
      if (like) {
        await PostModel.update(req, { $inc: { "info.like": 1 } });
        return like;
      }
    }
  }
  public async delete(req: Request): Promise<unknown> {
    if (req.params.id) {
      return this.Model.findByIdAndDelete(req.params.id);
    }
  }
}

export default new LikeModel();
