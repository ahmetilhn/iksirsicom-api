import { Request } from "express";
import { Schema, model } from "mongoose";
import IView from "../types/IView";
import { getIpAddress } from "../utils/ip-address.util";
import PostModel from "./post.model";

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
  public async read(req: Request): Promise<IView | IView[]> {
    if (req.params.id) {
      return this.Model.find({ post_id: req.params.id }).lean();
    }
    return this.Model.find().lean();
  }
  public async create(req: Request): Promise<IView> {
    const payload: IView = req.body;
    if (payload) {
      const view = new this.Model({
        ...payload,
        ip_address: getIpAddress(),
      }).save();
      if (view) {
        await PostModel.update(req, { $inc: { "info.view": 1 } });
        return view;
      }
    }
  }
  public async delete(req: Request): Promise<unknown> {
    if (req.params.id) {
      return this.Model.findByIdAndDelete(req.params.id);
    }
  }
}

export default new ViewModel();
