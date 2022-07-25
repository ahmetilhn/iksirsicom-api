const ip = require("ip");
export const getIpAddress: any = () => {
  return ip.address();
};
