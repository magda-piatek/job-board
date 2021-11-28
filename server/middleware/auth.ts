import { Response, NextFunction } from "express";

import { IRequest } from "../interfaces/request";
import { TUser } from "../../types/user";

export default (req: IRequest<TUser>, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();

  res.status(401).json({ msg: "Not authorized" });
};
