import type {NextFunction, Request, Response } from "express";
import { JWT_PASSWORD } from "./config.js";
import jwt from "jsonwebtoken"
export const userMiddleware = (req:Request, res:Response , next:NextFunction)=>{
    const headers = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_PASSWORD)
    if(decoded){
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            mesage:"You are not logged in"
        })
    }
}