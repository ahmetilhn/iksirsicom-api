import { Router } from "express";
import LikeController from "../controllers/LikeController";

class PostRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").post(LikeController.createLike);
  }
}

export default new PostRoutes().router;
