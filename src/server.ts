import express, { Application } from "express";
import serverConstant from "./constants/server.constant";
const app: Application = express();

// Listen port

app.listen(serverConstant.PORT, (): void => {
  console.log(serverConstant.PORT + serverConstant.MSG);
});
