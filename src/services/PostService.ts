import { NextFunction, Request, Response } from "express";
import PostModel from "../models/PostModel";
import BaseService from "./BaseService";

class PostService extends BaseService {
  constructor() {
    super(PostModel);
  }
}

export default new PostService();
