import { Schema, model } from "mongoose";
import ISubscription from "../types/ISubscription";

class SubscriptionModel {
  public subscriptionSchema = new Schema<ISubscription>({
    email: {
      type: String,
      required: true,
    },
  });
  public Model = model<ISubscription>("Subscription", this.subscriptionSchema);
  public async create(payload: ISubscription) {
    return new this.Model(payload).save();
  }
}

export default new SubscriptionModel();
