const Student = require("../models/studentModel")
const User = require("../models/userModle");
const Profile = require("../models/profileModle");
const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");

const   dataSave = async(req,res)=>{
    
    const { name, email, booktitle, price } = req.body;
        const author = await AuthorModel.create({
        authorname: name,
        email: email
    })

    const book = await BookModel.create({
        bookname: booktitle,
        price: price,
        authorid: author._id
    })
   
    
    await AuthorModel.findByIdAndUpdate(author._id, {$push:{booksid:book._id}} ) 

    res.send("Author Created with Books");

}


const dataDisplay = async (req, res) => {
    const author = await  AuthorModel.find().populate("booksid");
    res.send(author);
}

const bookdataSave=async(req,res)=>{
    const { authid, bookname, price }=req.body;

    const book = await BookModel.create({
          bookname:bookname ,
          price:price
    })

    await AuthorModel.findByIdAndUpdate(authid, {$push:{booksid:book._id}})
     res.send("Book save!!!");
}

const dataDisplay1 = async (req, res) => {
    const book = await  BookModel.find().populate("authorid");
    res.send(book);
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
    bookdataSave,
    dataDisplay1,
    dataDisplay,
    search,
    updateDisplay,
    updateDelete,
    editdatadisplay,
    editdata
}