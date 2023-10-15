import { NextFunction, Request, Response } from "express";

import { ZodType, ZodError } from "zod";

export function policyMiddleware<T>(
  schema: ZodType<T>,
  type: "params" | "body" | "query" = "body"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[type];
    try {
      const parsedData = schema.parse(data);

      req[type] = parsedData;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ error: "Validation error", details: error.format() });
      } else {
        next(error); // Forward unexpected errors to Express's error handling
      }
    }
  };
}
