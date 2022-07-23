import { NextFunction, Request, Response } from "express";

class PostControllers {
  constructor() {}
  public async getAllPosts(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      msg: "Tüm postlar çekildi",
    });
  }
  public async createPost(req: Request, res: Response, next: NextFunction) {
    const postData = req.body;
    console.log(postData);
  }
}

export default new PostControllers();
