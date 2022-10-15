import { Router } from "express";
import ViewController from "../controllers/view.controller";

class ViewRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(ViewController.get);
  }
}

export default new ViewRoutes().router;
