import { NextFunction, Request, Response } from "express";

export default class BaseService {
  constructor(public Model) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    return await this.Model.create(req.body);
  }
  public async read(req: Request, res: Response, next: NextFunction) {
    return await this.Model.read(req);
  }
}
