const Student = require("../models/studentModel")

const   dataSave = async(req,res)=>{
    const {rollno,name,city,fees} = req.body;
    const student = await Student.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });

    res.send("Data Save successfuly ! ")

}

const display = async (req,res)=>{
   const mydata = await Student.find();
   console.log("okkk");
   res.send(mydata);
}


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

module.exports = {
    dataSave,
    display,
    search,
    updateDisplay,
    updateDelete
}