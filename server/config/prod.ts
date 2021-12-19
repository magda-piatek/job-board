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
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
};
