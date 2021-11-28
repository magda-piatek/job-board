import { TKeys } from "./typedef";

export const keysProd: TKeys = {
  MONGO_URL: process.env.MONGO_URI,
  URL: process.env.URL,
  CLIENT_ID_FB: process.env.CLIENT_ID_FB,
  CLIENT_SECRET_FB: process.env.CLIENT_SECRET_FB,
  JWT_SECRET: process.env.JWT_SECRET,
  COOKIE_KEY: process.env.COOKIE_KEY,
  EMAIL: process.env.EMAIL,
};
