import LikeModel from "../models/like.model";
import BaseService from "./base.service";

class LikeService extends BaseService {
  constructor() {
    super(LikeModel);
  }
}

export default new LikeService();
