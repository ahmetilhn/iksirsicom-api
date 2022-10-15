import { Router } from "express";
import ViewController from "../controllers/view.controller";

class ViewRoutes {
  router: Router = Router();
  constructor() {
    this.initRoutes();
  }
  initRoutes() {
    this.router.route("/").post(ViewController.post);
    this.router.route("/").get(ViewController.get);
    this.router.route("/").put(ViewController.put);
    this.router.route("/:id").delete(ViewController.delete);
  }
}

export default new ViewRoutes().router;
