import { Response } from "express";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import auth from "../../middleware/auth";
import User from "../../models/user";
import keys from "../../config/keys";
import { IRequest } from "../../interfaces/request";
import { TAuthLoginReq } from "../../../types/auth";
import { TUser } from "../../../types/user";
import loginSchema from "../../../validation/login";
import validateObjectMW from "../../middleware/validation";

const jwtSecret = keys.jwtSecret;
const router = express.Router();

router.get("/", auth, async (req: IRequest<TUser>, res: Response) => {
  try {
    const user = await User.findById(req.body.id).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  validateObjectMW(loginSchema),
  async (req: IRequest<TAuthLoginReq>, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = (await User.findOne({ email })) as TUser;

      if (user && !user.confirmed)
        res.status(400).json({
          errors: [{ authError: "Please confirm your email to login" }],
        });

      if (!user)
        res.status(400).json({ errors: [{ authError: "User doesn't exist" }] });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({
          errors: [{ param: "invalid", authError: "Invalid credentials" }],
        });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        jwtSecret,
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

export default router;
