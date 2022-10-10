import { Router } from "express";
import UserController from "../controllers/user.controller";
class UserRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").post(UserController.createUser);
  }
}

export default new UserRoutes().router;
