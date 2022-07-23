import { Router } from "express";
import PostControllers from "../controllers/PostControllers";

class PostRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(PostControllers.getAllPosts);
  }
}

export default new PostRoutes().router;
