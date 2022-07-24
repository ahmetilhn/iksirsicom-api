import * as dotenv from "dotenv";
dotenv.config();

export default {
  API_PORT: process.env.API_PORT,
  DATABASE_SECRET_KEY: process.env.DATABASE_SECRET_KEY
};
