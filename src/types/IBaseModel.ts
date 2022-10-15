import { Request } from "express";

type IBaseModel = {
  read?: (req: Request) => Promise<unknown>;
  create?: (req: Request) => Promise<unknown>;
  update?: (req: Request) => Promise<unknown>;
  delete?: (req: Request) => Promise<unknown>;
};

export default IBaseModel;
