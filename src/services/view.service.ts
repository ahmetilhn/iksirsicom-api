import ViewModel from "../models/view.model";
import BaseService from "./base.service";

class ViewService extends BaseService {
  constructor() {
    super(ViewModel);
  }
}

export default new ViewService();
