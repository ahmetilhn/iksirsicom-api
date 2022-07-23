import express, { Application } from "express";
import serverConstant from "./constants/server.constant";
import envConfig from "./config/env.config";
const app: Application = express();

// Listen port

app.listen(envConfig.API_PORT, () => {
  console.log(envConfig.API_PORT + serverConstant.MSG);
});
