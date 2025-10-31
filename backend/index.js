const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const studentRoute = require("./routes/studentRoute")
require('dotenv').config();


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// app.use("/students",studentRoute);

app.use((req,res,next)=>{
  console.log("first level middleware");
  next();
});

app.get("/home",(req,res)=>{
    let name = false;
    if(name){
        res.status(200).send("home page no error");
    }else{
        res.status(401).send("Home page error occurs");
    }

});
app.get("/about",(req,res)=>{
     console.log("about page")
    res.send("welcome to about page")
});

app.get("/service",(req,res,next)=>{
    console.log("route level middleware");
  next();
},(req,res)=>{
     console.log("service page")
    res.send("welcome to service page")
});





mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected Succesfully");
})

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server run on 8000! port")
});

