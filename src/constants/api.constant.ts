export const API_DEV_URL: string = "http://localhost:" + process.env.API_PORT;
export const API_PROD_URL: string = process.env.API_PROD_LINK;

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return API_DEV_URL;
  return API_PROD_URL;
};
