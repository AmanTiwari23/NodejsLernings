const express = require("express");
const studentRoute = require("./routes/studentRoute");
const employeeRoute = require("./routes/empolyeeRoute");
const app = express();

app.use("/students",studentRoute);

app.use("/employee",employeeRoute);

app.listen(9000,()=>{
    console.log("server is listening on port 9000");
})