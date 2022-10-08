import PostModel from "../models/post.model";
import BaseService from "./base.service";

class PostService extends BaseService {
  constructor() {
    super(PostModel);
  }
}

export default new PostService();
