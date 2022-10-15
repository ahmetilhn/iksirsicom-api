import { Router } from "express";
import ViewController from "../controllers/view.controller";

class ViewRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(ViewController.get);
    this.router.route("/").get(ViewController.get);
    this.router.route("/").put(ViewController.get);
    this.router.route("/").delete(ViewController.get);
  }
}

export default new ViewRoutes().router;
