const express = require("express");
const Sturoute = require("./routes/studentRoute");
const app = express();

app.use("/student",Sturoute);

app.listen(9000,()=>{
    console.log("server is listening on port 9000");
})