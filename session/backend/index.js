import express from "express";
import webroute from "./routes/web.js"
import session from "express-session";
const app = express();

app.use(session({
    name:"amansesson",
    secret:"aman9589",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:20000}
}));

app.use("/",webroute);

app.listen(3000,()=>{
    console.log("sercer is running on port 3000");
});