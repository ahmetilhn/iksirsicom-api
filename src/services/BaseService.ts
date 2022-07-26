import { NextFunction, Request, Response } from "express";
export default class BaseService {
  constructor(public Model) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    return this.Model.create(req.body);
  }
  public async read(req: Request, res: Response, next: NextFunction) {
    return this.Model.read(req.params.id);
  }
  public async update(req: Request, res: Response, next: NextFunction) {
    return this.Model.update(req.params.id, req.body);
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    return this.Model.delete(req.params.id);
  }
}
