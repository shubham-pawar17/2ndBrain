import type { NextFunction, Request, Response } from "express";
import { JWT_PASSWORD } from "./config.js";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headers = req.headers["authorization"];

  if (!headers) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }

  const decoded = jwt.verify(headers, JWT_PASSWORD) as { id: string };

  req.userId = decoded.id;
  next();
};
