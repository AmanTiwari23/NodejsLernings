const Student = require("../models/studentModel")
const bcrypt =  require("bcryptjs")


const stuRegistration = async (req,res)=>{
    const {name,email,password} = req.body;
    const passwordHash = bcrypt.hash(password,10);

    const user = await Student.create({
        name:name,
        email:email,
        password:passwordHash
    });

    res.send("user succesfully registerd");
}

module.exports = {
   stuRegistration
}