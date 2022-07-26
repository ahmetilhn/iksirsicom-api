import SubscriptionModel from "../models/SubscriptionModel";
import BaseService from "./BaseService";

class SubscriptionService extends BaseService {
  constructor() {
    super(SubscriptionModel);
  }
}

export default new SubscriptionService();
