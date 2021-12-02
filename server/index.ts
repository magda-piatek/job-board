import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

import connectDB from "./config/db";
import auth from "./routes/api/auth";
import user from "./routes/api/user";
import confirmation from "./routes/api/confirmation";
import keys from "./config/keys";

require("./utils/passport");

const app: Application = express();

const port = process.env.PORT || 9000;

connectDB();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: keys.URL }));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.use(cookieParser());

app.use(
  session({
    secret: keys.COOKIE_KEY, //encrypt id in cookie
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
  })
);

app.use("*", (req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", keys.URL);
  next();
});

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("client/dist"));

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/confirmation", confirmation);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve("..", "client", "dist", "index.html"));
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
