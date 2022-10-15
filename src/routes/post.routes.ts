import { Router } from "express";
import PostController from "../controllers/post.controller";

class PostRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").get(PostController.get);
    this.router.route("/:id").get(PostController.get);
    this.router.route("/").post(PostController.post);
    this.router.route("/").put(PostController.put);
    this.router.route("/:id").delete(PostController.delete);
  }
}

export default new PostRoutes().router;
