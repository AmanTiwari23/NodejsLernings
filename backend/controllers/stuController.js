const Student = require("../models/studentModel")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken");
const multer = require("multer")
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../cloudinary");

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
    // const {email,password} = req.body;
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

const userAuth = async (req,res)=>{
    const token = req.header("auth-token");
    const decode = await jwt.verify(token,"aman9589");
    console.log(decode.id);

    const user = await Student.findById(decode.id).select("-password");
    console.log(user);
    res.send(user);
    

}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Student_images', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});

const upload = multer({ storage: storage }).array('images', 10); //image size
 
const stuSave=async(req, res)=>{
     upload(req,res,async (err)=>{
        if(err){
            return res.status(500).send("error uploading files : " + err.message);
        }
        const {email,name,subject} = req.body;
        const imageUrls = req.files.map(file=> file.path);


        const student = await Student.create({
            name:name,
            email:email,
            subject:subject,
            images:imageUrls,
            defaultImage:imageUrls[0]
        });
     });

     res.send("data save!");
}


const stuDisplay=async(req, res)=>{
    const student = await Student.find();
    res.send(student);
}
module.exports = {
   stuRegistration,
   stuLogin,
   userAuth,
   stuSave,stuDisplay
}