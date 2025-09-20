// const http = require("http");
// const fs = require("fs");

// http.createServer((req,res)=>{
//      res.write("<h1>welcome to my page</h1>");
//      fs.readFile("aman.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data);
//         res.end("<h3>serverend</h3>");
//      })
// }).listen(90)

// const fs = require("fs");

// fs.writeFile("aman.txt","welcome to satna",(err)=>{
//      if(err) throw err;
//      console.log("file created");
// })

// const fs = require("fs");

// fs.appendFile("anuj.txt","hello i am lerning node", (err)=>{
//     if (err) throw err;
//     console.log("filw created");
// })

// const fs = require("fs");

// fs.rename("aman.txt","arvind.txt",(err)=>{
//     if(err) throw err;
//     console.log("file renamed");
// });

// const fs = require("fs");

// fs.unlink("arvind.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
// });

// const fs = require("fs");

// if(fs.existsSync("anuj.txt")){
//     console.log("hai bhai")
// }else{
//     console.log("file nhi hai")
// }

const fs = require("fs");

// fs.mkdir("bhopal",(err)=>{
//     if(err) throw err;
//     console.log("new folder created");
// });

fs.readdir(".",(err,files)=>{
    if(err) throw err;
    console.log(files);
})