import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from "express";
import cors from "cors";
import corsConfig from "./config/cors.config";
import serverConstant from "./constants/server.constant";
import envConfig from "./config/env.config";

import Routes from "./routes";
import mongoose from "mongoose";
const app: Application = express();

// Listen port

class Server {
  constructor() {
    this.initServer();
  }
  initDatabase() {
    mongoose.connect(envConfig.DATABASE_LINK).catch((err) => {
      console.log(err);
    });
  }
  initConfig() {
    app.use(express.json({ limit: "100mb" }));
    app.use(cors(corsConfig));
  }
  initRouter() {
    app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json({
        msg: "Api init edildi",
        routes: ["/posts", "/views", "/likes", "/subscription"],
      });
    });
    new Routes(app);
  }
  initServer() {
    this.initDatabase();
    this.initConfig();
    this.initRouter();
    app.listen(envConfig.API_PORT, () => {
      console.log(envConfig.API_PORT + serverConstant.MSG);
    });
  }
}

new Server();
