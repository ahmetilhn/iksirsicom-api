import UserModel from "../models/user.model";
import BaseService from "./base.service";

class UserService extends BaseService {
  constructor() {
    super(UserModel);
  }
}

export default new UserService();
