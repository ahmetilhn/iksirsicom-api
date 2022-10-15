import UserService from "../services/user.service";
import BaseController from "./base.controller";

class UserController extends BaseController {
  constructor() {
    super(UserService);
  }
}

export default new UserController();
