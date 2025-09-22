const express = require("express");
const route = express.Router();

route.get("/home",(req,res)=>{
    res.send("this is a home page");
})

route.get("/fees",(req,res)=>{
    res.send("this is fees section");
})

route.get("/about",(req,res)=>{
    res.send("this is about section");

})

route.get("/subject",(req,res)=>{
    res.send("this is subject section")
});


module.exports = route