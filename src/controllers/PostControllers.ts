import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/ErrorHandler";
import PostService from "../services/PostService";

class PostControllers {
  constructor() {}
  public async getPosts(req: Request, res: Response, next: NextFunction) {
    const posts = await PostService.read(req, res, next);
    if (posts) {
      res.status(200).json(posts);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Bilinmeyen bir hata oluştu",
        statusCode: 500,
      },
      res
    );
  }
  public async getPostById(req: Request, res: Response, next: NextFunction) {
    const post = await PostService.read(req, res, next);
    if (post) {
      res.status(200).json(post);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Post bulunamadı",
        statusCode: 404,
      },
      res
    );
    return;
  }
  public async createPost(req: Request, res: Response, next: NextFunction) {
    const newPost = await PostService.create(req, res, next);
    if (newPost) {
      res.status(201).json(newPost);
      return;
    }
  }
}

export default new PostControllers();
