import { Router } from "express";
import LikeController from "../controllers/like.controller";

class LikeRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(LikeController.post);
    this.router.route("/").get(LikeController.get);
    this.router.route("/:id").get(LikeController.get);
    this.router.route("/:id").delete(LikeController.get);
    this.router.route("/").put(LikeController.get);
  }
}

export default new LikeRoutes().router;
