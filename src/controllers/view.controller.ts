import ViewService from "../services/view.service";
import BaseController from "./base.controller";

class ViewController extends BaseController {
  constructor() {
    super(ViewService);
  }
}

export default new ViewController();
