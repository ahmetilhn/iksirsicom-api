import { Router } from "express";
import SubscriptionController from "../controllers/subscription.controller";

class SubscriptionRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").post(SubscriptionController.createSubscription);
  }
}

export default new SubscriptionRoutes().router;
