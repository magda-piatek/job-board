import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import express from "express";

import User from "../../models/User";
import keys from "../../config/keys";

const router = express.Router();

router.get("/:token", async (req: Request, res: Response) => {
  try {
    const {
      user: { id },
    }: any = jwt.verify(req.params.token, keys.JWT_SECRET);

    const user = await User.findOne({ id });
    if (user.confirmed) {
      res.send("The link was already accepted");
    } else {
      await User.updateOne({ id }, [{ $set: { confirmed: true } }]);
      return res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

export default router;
