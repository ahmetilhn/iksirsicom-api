import express, { Application } from "express";
import serverConstant from "./constants/server.constant";
import envConfig from "./config/env.config";

import Routes from "./routes";
const app: Application = express();

// Listen port

class Server {
  constructor() {
    this.initServer();
  }
  initConfig() {
    app.use(express.json({ limit: "100mb" }));
  }
  initRouter() {
    new Routes(app);
  }
  initServer() {
    this.initConfig();
    this.initRouter();
    app.listen(envConfig.API_PORT, () => {
      console.log(envConfig.API_PORT + serverConstant.MSG);
    });
  }
}

new Server();
