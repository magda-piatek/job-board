import { NextFunction, Response } from "express";

const validateResourceMW =
  (resourceSchema: any) =>
  async (req: any, res: Response, next: NextFunction) => {
    const resource = req.body;
    console.log({ req });

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

export default validateResourceMW;
