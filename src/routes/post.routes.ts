import { Router } from "express";
import PostController from "../controllers/post.controller";

class PostRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(PostController.getPosts);
    this.router.route("/:id").get(PostController.getPostById);
    this.router.route("/").post(PostController.createPost);
    this.router.route("/:id").delete(PostController.deletePost);
  }
}

export default new PostRoutes().router;
