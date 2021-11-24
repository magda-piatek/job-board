import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import keys from "../config/keys";
import { IRequest } from "../interfaces/request";
import { TUser } from "../../types/user";

export default (req: IRequest<TUser>, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).json({ msg: "No token, authorization denied" });
  else {
    try {
      const decoded = <any>jwt.verify(token, keys.jwtSecret);

      req.body.id = decoded.user.id;

      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }
};
