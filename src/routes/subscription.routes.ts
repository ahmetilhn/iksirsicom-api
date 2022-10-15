import { Router } from "express";
import SubscriptionController from "../controllers/subscription.controller";

class SubscriptionRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(SubscriptionController.post);
  }
}

export default new SubscriptionRoutes().router;
