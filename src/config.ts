export const JWT_PASSWORD ="Shubhampawar1";
import express from "express";

declare module "express-serve-static-core" {
  interface Request {
    userId?: string; // or the correct type for your userId (string, number, etc)
  }
}
