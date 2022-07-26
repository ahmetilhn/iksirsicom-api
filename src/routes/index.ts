import { Application } from "express";
import LikeRoutes from "./LikeRoutes";
import PostRoutes from "./PostRoutes";
import ViewRoutes from "./ViewRoutes";
import SubscriptionRoutes from "./SubscriptionRoutes";
export default class Routes {
  constructor(public app: Application) {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.app.use("/posts", PostRoutes);
    this.app.use("/likes", LikeRoutes);
    this.app.use("/views", ViewRoutes);
    this.app.use("/subscriptions", SubscriptionRoutes);
  }
}
