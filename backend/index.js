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

app.use("/students",studentRoute);




mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected Succesfully");
})

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server run on 8000! port")
});

