import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/ErrorHandler";
import LikeService from "../services/LikeService";

class LikeController {
  constructor() {}
  public async createLike(req: Request, res: Response, next: NextFunction) {
    const newLike = await LikeService.create(req, res, next);
    if (newLike) {
      res.status(201).json({
        msg: "Beğeni oluşturuldu",
      });
    }
    ErrorHandler.handler(
      {
        msg: "Beğeni oluştulamadı",
        statusCode: 500,
      },
      res
    );
  }
}

export default new LikeController();
