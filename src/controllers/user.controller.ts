import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/error.handler";
import UserService from "../services/user.service";

class UserController {
  constructor() {}
  public async createUser(req: Request, res: Response, next: NextFunction) {
    const newUser = await UserService.create(req, res, next);
    if (newUser) {
      res.status(201).json(newUser);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Kullanıcı oluşturulamadı",
        statusCode: 500,
      },
      res
    );
  }
}

export default new UserController();
