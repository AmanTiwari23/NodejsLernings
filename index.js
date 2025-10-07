const express = require("express");
const studentRoute = require("./routes/studentRoute");
const employeeRoute = require("./routes/empolyeeRoute");
const { default: mongoose } = require("mongoose");
const app = express();
  
mongoose.connect("mongodb://127.0.0.1:27017/Aman").then(()=>{
    console.log("DB connected succesfully");
});

app.set("view engine", "ejs")
app.use("/students",studentRoute);
app.use("/employee",employeeRoute);


app.listen(9000,()=>{
    console.log("server is listening on port 9000");
})