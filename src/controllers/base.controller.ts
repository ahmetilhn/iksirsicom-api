import { Response, Request, NextFunction } from "express";
import BaseService from "../services/base.service";
import IBaseService from "../types/IBaseService";
import ErrorHandler from "../handlers/error.handler";
class BaseController {
  constructor(public model: unknown) {}
  public baseService = new BaseService(this.model);
  public async read(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.baseService.read(req, res, next);
      if (response) {
        res.status(200).json(response);
      }
    } catch (err: unknown) {
      ErrorHandler.handler(
        {
          msg: err,
        },
        res
      );
    }
  }
  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.baseService.create(req, res, next);
      if (response) {
        res.status(201).json({
          msg: "Başarılı",
        });
      }
    } catch (err: unknown) {
      ErrorHandler.handler(
        {
          msg: err,
        },
        res
      );
    }
  }
  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.baseService.update(req, res, next);
      if (response) {
        res.status(200).json(response);
      }
    } catch (err: unknown) {
      ErrorHandler.handler(
        {
          msg: err,
        },
        res
      );
    }
  }
  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.baseService.delete(req, res, next);
      if (response) {
        res.status(200);
      }
    } catch (err: unknown) {
      ErrorHandler.handler(
        {
          msg: err,
        },
        res
      );
    }
  }
}

export default BaseController;
