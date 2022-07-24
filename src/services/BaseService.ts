import { NextFunction, Request, Response } from "express";
export default class BaseService {
  constructor(public Model) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    return this.Model.create(req.body);
  }
  public async read(req: Request, res: Response, next: NextFunction) {
    return this.Model.read(req);
  }
  async delete(id: string) {
    return this.Model.delete(id);
  }
}
