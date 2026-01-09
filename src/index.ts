import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { Types } from "mongoose";
import { random } from "./util.js";

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
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials    "
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;

    await ContentModel.create({
        title,
        link,
        type,
        userId: new mongoose.Types.ObjectId(req.userId),
        tags: []
    });

    res.json({
        message: "Content Added"
    });
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const userObjectId = new mongoose.Types.ObjectId(req.userId);
    const content = await ContentModel.find({
        userId: userObjectId
    }).populate("userId" , "username")
    res.json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware , async (req, res) => {
    const contentId = req.body.contentId;
    
    await ContentModel.deleteMany({
        contentId,
        userId : new mongoose.Types.ObjectId(req.userId)
    })
    res.json({
        message : "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;

  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userObjectId = new Types.ObjectId(req.userId);

  if (share) {
    const existingLink =await LinkModel.findOne({
        userId : req.userId
    })
    if(existingLink){
        res.json({
            hash :existingLink.hash
        })
        return;
    }
    const hash = random(10);
    await LinkModel.create({
      userId: userObjectId,
      hash : hash
    });
    res.json({
    hash
  });
  } else {
    await LinkModel.deleteOne({
      userId: userObjectId,
    });
    res.json({
    message: "Removed Link",
  });
  }

});


app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const Link = await LinkModel.findOne({
        hash
    });

    if(!Link){
        res.status(411).json({
            message :"Sorry incorrect Link"
        })
        return;
    }
    const content = await ContentModel.find({
        userId : Link.userId
    })
    const user = await UserModel.findOne({
        _id : Link.userId
    })
    if(!user){
        res.status(411).json({
            message :"user not find , somenthing went wrong"
        })
        return;
    }
    res.json({
        username:user.username,
        content : content
    })
})
console.log("Index file started");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});