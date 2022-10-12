import { Router } from "express";
import UserController from "../controllers/user.controller";
class UserRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").post(UserController.createUser);
    this.router.route("/").get(UserController.getUsers);
  }
}

export default new UserRoutes().router;
