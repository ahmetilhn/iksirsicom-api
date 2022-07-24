import { Router } from "express";
import PostControllers from "../controllers/PostControllers";

class PostRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(PostControllers.getPosts);
    this.router.route("/:id").get(PostControllers.getPostById);
    this.router.route("/").post(PostControllers.createPost)
  }
}

export default new PostRoutes().router;
