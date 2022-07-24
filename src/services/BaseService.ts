import { NextFunction, Request, Response } from "express";

export default class BaseService {
  constructor(public Model) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    return await this.Model.save(req.body);
  }
}
