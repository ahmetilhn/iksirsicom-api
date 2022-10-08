import SubscriptionModel from "../models/subscription.model";
import BaseService from "./base.service";

class SubscriptionService extends BaseService {
  constructor() {
    super(SubscriptionModel);
  }
}

export default new SubscriptionService();
