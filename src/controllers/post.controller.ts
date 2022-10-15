import PostService from "../services/post.service";
import BaseController from "./base.controller";

class PostController extends BaseController {
  constructor() {
    super(PostService);
  }
}

export default new PostController();
