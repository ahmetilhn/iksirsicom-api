import { Router } from "express";
import ViewController from "../controllers/view.controller";

class ViewRoutes {
  router: Router = Router();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").post(ViewController.createView);
  }
}

export default new ViewRoutes().router;
