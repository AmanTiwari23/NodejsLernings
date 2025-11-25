const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    methods: "GET,POST",
    credentials:true,
}));

mongoose.connect("mongodb://127.0.0.1:27017/cookieAuth").then(
    console.log("db connected ")
);

const userSchema = new mongoose.Schema({
    username:String,
    password:String
});

const User = mongoose.model("User",userSchema);

app.post("/register",async(req,res)=>{
    const {username,password} =  req.body;
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(password,10);

    await User.create({username,password:hashedPassword});
    res.json({message:"User registratered successfully"});

});

app.post("/login",async (req,res)=>{
    try{
        const {username,password} = req.body;
   const user = await User.findOne({username});

   if(!user) return res.status(400).json({message:"invalid credentials"});

   const ispasswordvalid = bcrypt.compare(password,user.password);
   if(!ispasswordvalid){
    res.status(400).json({msg:"Invalid password"});
   }

   res.cookie("authToken",user._id.toString(),{
    httpOnly:true,
    secure:false
   });

   res.json({message:"Login successful"});

    }catch(err){
    res.status(500).send(err.message);
    }
   

});

app.get("/profile",async(req,res)=>{
    const {authToken} = req.cookies;
    if(!authToken) return res.status(401).json({message:"not authenticated"});
    const user = await User.findById(authToken).select("-password");
    res.json(user);

});

app.post("/logout",(req,res)=>{
    res.clearCookie("authToken");
    res.json({message:"Logged out successfully"});
});

app.listen(5000,()=> console.log("Server is listening on port 5000"));
