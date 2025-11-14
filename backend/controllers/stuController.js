const Student = require("../models/studentModel")
const User = require("../models/userModle");
const Profile = require("../models/profileModle");


const   dataSave = async(req,res)=>{
    const {uname,lname,fname,email} = req.body;
    const user = await User.create({
        username:uname,
        email:email
    });

    const profile = await Profile.create({
        firstName:fname,
        lastName:lname,
        userid:user._id
    })

    res.send("user created with profile ! ");

}
const display = async (req, res, next) => {
  try {
    const profile = await Profile.find().populate("userid");
    console.log(profile);
    res.status(200).send(profile);
  } catch (error) {
    console.error("Display Error:", error.message);
    res.status(500).send("Something went wrong");
  }
};

const search = async(req,res)=>{
    const {rollno} = req.body;
    const mydata = await Student.find({rollno:rollno});
    res.send(mydata);
    console.log(mydata);
}

const updateDisplay = async(req,res)=>{
    const data = await Student.find();
    res.send(data);
    console.log(data);
}

const updateDelete = async(req,res)=>{
    const {id} = req.query;
    const data = await Student.findByIdAndDelete(id);
    res.send({msg:"Data deleted sucessfuly"});
}
const editdatadisplay = async(req,res)=>{
        const {id} = req.params;

        const data = await Student.findById(id);
        res.send(data);
        console.log(data);

}

const editdata = async(req,res)=>{
    const {_id,rollno,name,city,fees} = req.body;
    const data = await Student.findByIdAndUpdate(_id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });
    res.send({msg:"Data save successfuly"});
}

module.exports = {
    dataSave,
    display,
    search,
    updateDisplay,
    updateDelete,
    editdatadisplay,
    editdata
}