import SubscriptionService from "../services/subscription.service";
import BaseController from "./base.controller";

class SubscriptionController extends BaseController {
  constructor() {
    super(SubscriptionService);
  }
}

export default new SubscriptionController();
