import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/ErrorHandler";
import ViewService from "../services/ViewService";

class ViewController {
  constructor() {}
  public async createView(req: Request, res: Response, next: NextFunction) {
    const newView = await ViewService.create(req, res, next);
    if (newView) {
      res.status(201).json({
        msg: "Görüntülenme oluşturuldu",
      });
    }
    ErrorHandler.handler(
      {
        msg: "Görüntülenme oluştulamadı",
        statusCode: 500,
      },
      res
    );
  }
}

export default new ViewController();
