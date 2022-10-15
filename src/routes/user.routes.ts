import { Router } from "express";
import UserController from "../controllers/user.controller";
class UserRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(UserController.post);
    this.router.route("/").get(UserController.get);
  }
}

export default new UserRoutes().router;
