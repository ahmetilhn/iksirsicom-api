import { NextFunction, Request, Response } from "express";
import IBaseModel from "../types/IBaseModel";
export default class BaseService {
  private Model: IBaseModel;
  constructor(model: unknown) {
    this.Model = model;
  }

  public async read(
    req: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<unknown> {
    return this.Model.read(req);
  }
  public async create(
    req: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<unknown> {
    return this.Model.create(req);
  }
  public async update(
    req: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<unknown> {
    return this.Model.update(req);
  }
  public async delete(
    req: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<unknown> {
    return this.Model.delete(req);
  }
}
