import { Response, Request, NextFunction } from "express";
import ErrorHandler from "../handlers/error.handler";
import IBaseService from "../types/IBaseService";
class BaseController {
  public service: IBaseService;
  constructor(service: IBaseService) {
    this.service = service;
    this.get = this.get.bind(this);
    this.put = this.put.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.service.read(req);
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
  public async post(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.service.create(req);
      if (response) {
        res.status(201).json(response);
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
  public async put(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = await this.service.update(req);
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
      const response = await this.service.delete(req);
      if (response) {
        res.status(200).json({
          msg: "Deleted",
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
}

export default BaseController;
