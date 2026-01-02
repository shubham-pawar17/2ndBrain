import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
const app = express();
app.use(express.json());


app.post("/api/v1/signup", async (req, res) => {
    // TODO : zod validatiion ,status code , hash the password
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password
        })

        res.status(200).json({
            message: "User Signed up"
        })
    } catch (e) {
        res.status(411).json({
            message: "user aleready exist"
        })
    }
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id : existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message : "Incorrect Credentials    "
        })
    }
})

app.post("/api/v1/content", userMiddleware ,  async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags:[]
    })

    res.json({
        message: "Content Added"
    })
})

app.get("/api/v1/content", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
})

app.delete("/api/v1/content", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
})

app.post("/api/v1/brain/share", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
})

app.get("/api/v1/brain/:sharelink", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
})
console.log("Index file started");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});