import { Schema, model } from "mongoose";
import IView from "../types/IView";
import { getIpAddress } from "../utils/ip-address.util";
import PostModel from "./PostModel";

class ViewModel {
  public viewSchema = new Schema<IView>({
    post_id: {
      type: String,
      required: true,
    },
    ip_address: {
      type: String,
      required: true,
    },
  });
  public Model = model<IView>("View", this.viewSchema);
  public async read(postId?: string) {
    if (postId) {
      return this.Model.find({ post_id: postId }).lean();
    }
    return this.Model.find().lean();
  }
  public async create(payload: IView) {
    const view = new this.Model({
      ...payload,
      ip_address: getIpAddress(),
    }).save();
    if (view) {
      return PostModel.update(payload.post_id, { $inc: { "info.view": 1 } });
    }
  }
  public async delete(id: string) {
    return this.Model.findByIdAndDelete(id);
  }
}

export default new ViewModel();
