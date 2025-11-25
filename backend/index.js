// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
// const studentRoute = require("./routes/studentRoute")
// const multer = require("multer")
// require('dotenv').config();

// app.use(cors());
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

// app.use("/students",studentRoute);

// mongoose.connect(process.env.MONGODB_URL).then(()=>{
//     console.log("DB connected Succesfully");
// })

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/');
//     },

//     filename:(req,file,cb)=>{
//         cb(null,`${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({storage:storage});

// app.post("/upload",upload.single("myfile"),(req,res)=>{
//     console.log(req.file.filename);
//     res.send("File Uploaded");
// })

// const port = process.env.PORT || 8000

// app.listen(port,()=>{
//     console.log("server run on 8000! port")
// });

const cluster = require('cluster');
const http = require('http');
const os = require('os');
if (cluster.isMaster) {
// Get the number of CPU cores available
const numCPUs = os.cpus().length;
console.log(`Master process PID: ${process.pid}`);
console.log(`Forking ${numCPUs} workers...`);
// Fork workers
for (let i = 0; i < numCPUs; i++) {
cluster.fork();
}
// Listen for worker exit events
cluster.on('exit', (worker, code, signal) => {
console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
cluster.fork();
});
} else {
// Worker processes handle incoming HTTP requests
http.createServer((req, res) => {
res.writeHead(200);
res.end(`Handled by worker process PID: ${process.pid}\n`);
}).listen(3000);
console.log(`Worker process PID: ${process.pid} is running`);
}