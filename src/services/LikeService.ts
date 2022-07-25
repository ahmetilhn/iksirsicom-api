import LikeModel from "../models/LikeModel";
import BaseService from "./BaseService";

class LikeService extends BaseService {
  constructor() {
    super(LikeModel);
  }
}

export default new LikeService();
