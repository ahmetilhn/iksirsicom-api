import { Application } from "express";
import PostRoutes from "./PostRoutes";

export default class Routes {
  constructor(public app: Application) {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.app.use("/posts", PostRoutes);
  }
}
