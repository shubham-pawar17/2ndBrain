import mongoose , {model , Schema} from "mongoose";

mongoose.connect("mongodb+srv://shubham:wNowKTyAm8E6EKbN@cluster0.vxy54d3.mongodb.net/2ndBrain")

const UserSchema = new Schema({
    username : {type: String, unique:true},
    password : String
})

export const UserModel = model("Users" , UserSchema);

const ContentSchema = new Schema({
    title : String ,
    link : String ,
    tags : [{type:mongoose.Types.ObjectId , ref :'Tag'}],
    userId:[{type:mongoose.Types.ObjectId , ref :'User' , required:true}],
})

export const ContentModel = model("Content" , ContentSchema);
