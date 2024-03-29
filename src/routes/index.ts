import { Application } from "express";
import LikeRoutes from "./like.routes";
import PostRoutes from "./post.routes";
import ViewRoutes from "./view.routes";
import SubscriptionRoutes from "./subscription.routes";
import UserRoutes from "./user.routes";
export default class Routes {
  constructor(public app: Application) {
    this.initRoutes();
  }
  initRoutes() {
    this.app.use("/posts", PostRoutes);
    this.app.use("/likes", LikeRoutes);
    this.app.use("/views", ViewRoutes);
    this.app.use("/subscriptions", SubscriptionRoutes);
    this.app.use("/users", UserRoutes);
  }
}
