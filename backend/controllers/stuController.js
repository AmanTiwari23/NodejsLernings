const Student = require("../models/studentModel")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken");


const stuRegistration = async (req,res)=>{
    const {name,email,password} = req.body;
    const passwordHash =await bcrypt.hash(password,10);

    const user = await Student.create({
        name:name,
        email:email,
        password:passwordHash
    });

    res.send("user succesfully registerd");
}

const stuLogin = async (req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);

    const user = await Student.findOne({email:email});
    if(!user){
        res.status(400).send({msg:"Invalid email"});
    }
    const passwordValid = await bcrypt.compare(password,user.password);
    if(!passwordValid){
        res.status(400).send({msg:"Invalid Password"});
    }
    const token = jwt.sign({id:user._id},"aman9589",{expiresIn:"1d"});
    res.status(200).send({token:token,msg:"user successfully login"});
}

module.exports = {
   stuRegistration,
   stuLogin
}