import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://shubham:wNowKTyAm8E6EKbN@cluster0.vxy54d3.mongodb.net/2ndBrain");

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String
});

export const UserModel = model("Users", UserSchema);

const ContentSchema = new Schema({
  title: { type: String, required: true },

  link: { type: String },

  type: {
    type: String,
    enum: ["tweet", "youtube", "article", "note", "pdf"],
    required: true
  },

  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const LinkSchema = new Schema({
  hash :String ,
  userId : {type : mongoose.Types.ObjectId , ref :'User' , required : true , unique:true}
})
export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Links", LinkSchema);
