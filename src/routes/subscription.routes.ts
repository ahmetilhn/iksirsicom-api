import { Router } from "express";
import SubscriptionController from "../controllers/subscription.controller";

class SubscriptionRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(SubscriptionController.post);
    this.router.route("/").get(SubscriptionController.post);
    this.router.route("/").put(SubscriptionController.post);
    this.router.route("/:id").delete(SubscriptionController.post);
    this.router.route("/:id").get(SubscriptionController.post);
  }
}

export default new SubscriptionRoutes().router;
