import { NextFunction, Request, Response } from "express";

export default class BaseService {
  constructor(public Model) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    return await new this.Model(req.body).save();
  }
}
