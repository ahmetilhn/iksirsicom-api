import { Response, Request, NextFunction } from "express";
type IBaseService = {
  create: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  read: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
  delete: (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
};

export default IBaseService;
