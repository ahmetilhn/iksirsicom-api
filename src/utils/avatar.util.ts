import { API_PROD_URL } from "../constants/api.constant";

export const randomAvatar = (gender: string): string => {
  const baseDir = `${API_PROD_URL}/public/img/avatars/svg/`;
  if (gender === "woman") {
    const random = getRandomInt(1, 4);
    return baseDir + `woman-${random}.svg`;
  }
  const random = getRandomInt(1, 11);
  return baseDir + `man-${random}.svg`;
};
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
