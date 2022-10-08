import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../handlers/error.handler";
import PostService from "../services/post.service";

class PostController {
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
  }
  public async createPost(req: Request, res: Response, next: NextFunction) {
    const newPost = await PostService.create(req, res, next);
    if (newPost) {
      res.status(201).json(newPost);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Post oluşturulamadı",
        statusCode: 500,
      },
      res
    );
  }
  public async updatePost(req: Request, res: Response, next: NextFunction) {
    const updated = await PostService.update(req, res, next);
    if (updated) {
      res.status(200).json(updated);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Post güncelenemedi",
        statusCode: 500,
      },
      res
    );
  }
  public async deletePost(req: Request, res: Response, next: NextFunction) {
    const deleted = await PostService.delete(req, res, next);
    if (deleted) {
      res.status(200).json(deleted);
      return;
    }
    ErrorHandler.handler(
      {
        msg: "Post silinemedi",
        statusCode: 500,
      },
      res
    );
  }
}

export default new PostController();
