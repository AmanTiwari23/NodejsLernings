const http = require("http");

const stu = require("./bhopal")

http.createServer((req,res)=>{
    res.write("<h1>welcome to node </h1>");
    res.write(stu.myCollege());
    res.write(stu.myFees());
    res.end("serevr end")
}).listen(8000,()=>{
   console.log("server is runing on port 8000");
})