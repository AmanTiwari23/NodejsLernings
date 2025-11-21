const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const studentRoute = require("./routes/studentRoute")
const multer = require("multer")
require('dotenv').config();


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/students",studentRoute);





mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected Succesfully");
})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },

    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage:storage});

app.post("/upload",upload.single("myfile"),(req,res)=>{
    console.log(req.file.filename);
    res.send("File Uploaded");
})


const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log("server run on 8000! port")
});

