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

module.exports = {
    dataSave,
    display
}