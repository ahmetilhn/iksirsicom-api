import LikeService from "../services/like.service";
import BaseController from "./base.controller";

class LikeController extends BaseController {
  constructor() {
    super(LikeService);
  }
}

export default new LikeController();
