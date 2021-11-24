export const keysProd: {
  mongoURI: string | undefined;
  //   url: string;
  //   user: string;
  //   pass: string;
  //   secret: string;
  jwtSecret: string;
} = {
  mongoURI: process.env.MONGO_URI,
  //   url: process.env.URL,
  //   user: process.env.USER,
  //   pass: process.env.PASS,
  //   secret: process.env.SECRET,
  jwtSecret: process.env.SECRETJWT,
};
