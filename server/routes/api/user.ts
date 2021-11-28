import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Response } from "express";

import User from "../../models/User";
import { TAuthRegisterReq } from "../../../types/auth";
import keys from "../../config/keys";
import { IRequest } from "../../interfaces/request";
import registerSchema from "../../../validation/register";
import validateObjectMW from "../../middleware/validation";
import sendEmail from "../../utils/send-email";

const router = express.Router();

router.post(
  "/register",
  validateObjectMW(registerSchema),

  async (req: IRequest<TAuthRegisterReq>, res: Response) => {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user)
        res
          .status(400)
          .json({ errors: [{ authError: "User already exists" }] });

      user = new User({ email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      jwt.sign(
        { user: user.id },
        keys.JWT_SECRET,
        {
          expiresIn: "1d",
        },
        (err, emailToken) => {
          if (!err) {
            sendEmail(user.email, emailToken);
          }
        }
      );

      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

export default router;
