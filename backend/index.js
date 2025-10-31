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

app.get("/home",(req,res,next)=>{
   
   try{
    throw new Error("Sycronous Error");
   }catch(err){
    next(err);
   }

});



app.get("/about",(req,res,next)=>{
    throw new Error("About Something wrong");
    next();
});

app.get("/service",(req,res,next)=>{
    throw new Error("Service error Some went wrong");
    next();
});


app.use((err,req,res,next)=>{
   res.status(500).send("error handler middileware is runing");
})





mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected Succesfully");
})

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server run on 8000! port")
});

