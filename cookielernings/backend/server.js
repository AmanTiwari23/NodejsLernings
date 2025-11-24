const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));

mongoose.connect("mongodb://127.0.0.1:27017/cookieAuth");

const userSchema = new mongoose.Schema({
    user:String,
    password:String
});

const User = mongoose.model("User",userSchema);

app.post("/register",async(req,res)=>{
    const {username,password} =  req.body;
    const hashedPassword = await bcrypt.hash(password,10);

    await User.create({username,password:hashedPassword});
    res.jason({message:"User registratered successfully"});

});

app.post("/login",async (req,res)=>{
   const {username,password} = req.body;
   const user = await User.findOne({username});

   if(!user) return res.status(400).json({message:"invalid credentials"});

   res.cookie("authToken",user._id.toString(),{
    httpOnly:true,
    secure:false
   });

   res.json({message:"Login successful"});

});

app.get("/profile",async(req,res)=>{
    const {authToken} = req.cookies;
    if(!authToken) return res.status(401).json({message:"not authenticated"});
    const user = await User.findById(authToken).select("-password");
    res.json(user);

});

app.post("/logout",(req,res)=>{
    res.clearCookie("authToken");
    res.jason({message:"Logged out successfully"});
});

app.listen()
