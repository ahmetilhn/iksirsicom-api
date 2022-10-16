import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import corsConfig from "./config/cors.config";
import serverConstant from "./constants/server.constant";
import envConfig from "./config/env.config";

import Routes from "./routes";
import mongoose from "mongoose";
const app: Application = express();
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
    app.use("/public", express.static(process.cwd() + "/public"));
  }
  initRouter() {
    new Routes(app);
  }
  initServer() {
    this.initDatabase();
    this.initConfig();
    this.initRouter();
    this.listen();
  }
  listen() {
    app.listen(envConfig.API_PORT, () => {
      console.log(envConfig.API_PORT + serverConstant.MSG);
    });
  }
}

new Server();
