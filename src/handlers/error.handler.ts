import { Response } from "express";
import IError from "../types/IError";

class ErrorHandler {
  public handler(errData: IError, res: Response) {
    res.status(errData.statusCode).json({
      msg: errData.msg,
    });
  }
}

export default new ErrorHandler();
