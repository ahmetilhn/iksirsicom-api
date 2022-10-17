import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/error.handler";
import envConfig from "../config/env.config";
// req.method: GET, POST, PUT, DELETE, OPTIONS
const allowedMethods: string[] = ["GET", "OPTIONS"];
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (allowedMethods.includes(req.method)) {
    next();
  } else {
    // Bearer _token_
    const token = req.headers?.authorization?.split(" ")[1];
    if (token === envConfig.ADMIN_TOKEN) {
      next();
    } else {
      ErrorHandler.handler(
        {
          msg: "Unauthorized Request",
          statusCode: 401,
        },
        res
      );
    }
  }
};
