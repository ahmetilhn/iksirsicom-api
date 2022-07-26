import ViewModel from "../models/ViewModel";
import BaseService from "./BaseService";

class ViewService extends BaseService {
  constructor() {
    super(ViewModel);
  }
}

export default new ViewService();
