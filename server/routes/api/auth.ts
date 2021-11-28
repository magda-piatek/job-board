import express, { Response, Request } from "express";
import jwt from "jsonwebtoken";

import keys from "../../config/keys";

import passport from "passport";
import { TUser } from "../../../types/user";
import User from "../../models/User";
import checkIfAuth from "../../middleware/auth";

const JWT_SECRET = keys.JWT_SECRET;
const router = express.Router();

export interface IRequestUser extends Request {
  user: TUser;
}

router.get("/user", checkIfAuth, async (req: IRequestUser, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// Send our user to Facebook to authenticate
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email"],
  })
);

// Facebook sends our user back to our application here with token and profile information
router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    const payload = {
      user: {
        id: (req.user as TUser).id,
      },
    };

    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) throw err;
        res.cookie("AUTH", token, { httpOnly: false });
        res.redirect("/");
      }
    );
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.cookie("AUTH", "", { expires: new Date(0), httpOnly: false });
  res.status(200).json("User Logged out");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (info)
      return res.status(400).json({
        errors: [{ authError: info.message }],
      });

    const payload = {
      user: {
        id: user.id,
      },
    };

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      jwt.sign(
        payload,
        JWT_SECRET,
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) throw err;
          res.cookie("AUTH", token, { httpOnly: false });

          return res.status(200).json({ token });
        }
      );
    });
  })(req, res, next);
});

export default router;
