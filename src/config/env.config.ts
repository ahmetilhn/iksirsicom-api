import * as dotenv from "dotenv";
dotenv.config();

export default {
  API_PORT: process.env.API_PORT,
  API_PROD_LINK: process.env.API_PROD_LINK,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_CLUSTER: process.env.DB_CLUSTER,
  DB_NAME: process.env.DB_NAME,
  ADMIN_TOKEN: process.env.ADMIN_TOKEN,
};
