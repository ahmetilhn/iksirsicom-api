import mongoose from "mongoose";
import envConfig from "./env.config";
export default () => {
  mongoose
    .connect(
      `mongodb+srv://${envConfig.DB_USERNAME}:${envConfig.DB_PASSWORD}@${envConfig.DB_CLUSTER}.mongodb.net/${envConfig.DB_NAME}?retryWrites=true&w=majority`
    )
    .catch((err: Error) => {
      throw new Error(err?.message);
    });
};
