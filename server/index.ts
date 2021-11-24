import express, { Application, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./config/db";
import auth from "./routes/api/auth";
import user from "./routes/api/user";
import confirmation from "./routes/api/confirmation";

const app: Application = express();

const port = process.env.PORT || 9000;

connectDB();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/dist"));

app.use(
  cors({
    origin: "*",
  })
);

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
