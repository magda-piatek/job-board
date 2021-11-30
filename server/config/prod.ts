import { TKeys } from "./typedef";

export const keysProd: TKeys = {
  MONGO_URL: process.env.MONGO_URI,
  URL: process.env.URL,
  CLIENT_ID_FB: process.env.CLIENT_ID_FB,
  CLIENT_SECRET_FB: process.env.CLIENT_SECRET_FB,
  CLIENT_ID_GOOGLE: process.env.CLIENT_ID_GOOGLE,
  CLIENT_SECRET_GOOGLE: process.env.CLIENT_SECRET_GOOGLE,
  JWT_SECRET: process.env.JWT_SECRET,
  COOKIE_KEY: process.env.COOKIE_KEY,
  EMAIL: process.env.EMAIL,
};
