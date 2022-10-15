import { Router } from "express";
import SubscriptionController from "../controllers/subscription.controller";

class SubscriptionRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(SubscriptionController.post);
    this.router.route("/").get(SubscriptionController.get);
    this.router.route("/:id").get(SubscriptionController.get);
    this.router.route("/").put(SubscriptionController.put);
    this.router.route("/:id").delete(SubscriptionController.delete);
  }
}

export default new SubscriptionRoutes().router;
