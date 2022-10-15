import { Request } from "express";
import { Schema, model } from "mongoose";
import ISubscription from "../types/ISubscription";

class SubscriptionModel {
  public subscriptionSchema = new Schema<ISubscription>(
    {
      email: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  public Model = model<ISubscription>("Subscription", this.subscriptionSchema);
  public async create(req: Request): Promise<ISubscription> {
    const payload: ISubscription = req.body;
    if (payload) {
      return new this.Model(payload).save();
    }
  }
}

export default new SubscriptionModel();
