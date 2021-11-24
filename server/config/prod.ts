export const keysProd: {
  mongoURI: string | undefined;
  jwtSecret: string;
} = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.SECRETJWT,
};
