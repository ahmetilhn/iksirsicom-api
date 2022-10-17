import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import corsConfig from "./config/cors.config";
import serverConstant from "./constants/server.constant";
import envConfig from "./config/env.config";
import Routes from "./routes";
import dbConfig from "./config/db.config";
import { authMiddleware } from "./middlewares/auth.middleware";
const app: Application = express();
class Server {
  constructor() {
    this.initServer();
  }
  initConfig() {
    app.use(express.json({ limit: "100mb" }));
    app.use(cors(corsConfig));
    app.use("/public", express.static(process.cwd() + "/public"));
  }
  initServer() {
    this.initConfig();
    this.initDatabase();
    this.initMiddleware();
    this.initRouter();
    this.listen();
  }
  initDatabase() {
    dbConfig();
  }
  initMiddleware() {
    app.use((req, res, next) => {
      authMiddleware(req, res, next);
    });
  }
  initRouter() {
    new Routes(app);
  }
  listen() {
    app.listen(envConfig.API_PORT, () => {
      console.log(envConfig.API_PORT + serverConstant.MSG);
    });
  }
}

new Server();
