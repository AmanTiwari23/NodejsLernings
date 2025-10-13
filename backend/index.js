const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const studentRoute = require("./routes/studentRoute")


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/students",studentRoute);




mongoose.connect("mongodb+srv://tiwari95aman_db_user:lYR3PWDLmCU6sb1L@cluster0.cxpayrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB connected Succesfully");
})


app.listen(8000,()=>{
    console.log("server run on 8000! port")
});

