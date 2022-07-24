import { NextFunction, Request, Response } from "express";
import PostService from "../services/PostService";

class PostControllers {
  constructor() {}
  public async getAllPosts(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      msg: "Tüm postlar çekildi",
    });
  }
  public async createPost(req: Request, res: Response, next: NextFunction) {
    const newPost = await PostService.create(req, res, next);
    if (newPost) {
      res.status(201).json({
        msg: "Kayıt başarılı",
      });
    } else {
      res.status(500).json({
        msg: "Kayıt başarısız",
      });
    }
  }
}

export default new PostControllers();
