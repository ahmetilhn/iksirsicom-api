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
    this.router.route("/:username").get(UserController.get);
    this.router.route("/:id").get(UserController.get);
    this.router.route("/").put(UserController.get);
    this.router.route("/:id").delete(UserController.get);
    this.router.route("/:username").delete(UserController.get);
  }
}

export default new UserRoutes().router;
