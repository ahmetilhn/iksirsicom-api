import * as dotenv from "dotenv";
dotenv.config();

export default {
  API_PORT: process.env.API_PORT,
  DATABASE_LINK: process.env.DATABASE_LINK,
};
