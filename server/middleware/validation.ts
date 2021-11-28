import { NextFunction, Response, Request } from "express";

export default (resourceSchema: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;

    try {
      await resourceSchema.validate(resource, { abortEarly: false });
      next();
    } catch (err) {
      const validationErrors: any = {};

      err.inner.forEach((error: any) => {
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });

      res.status(400).json({ error: validationErrors });
    }
  };
