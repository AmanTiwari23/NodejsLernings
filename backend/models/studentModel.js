const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  
    name:String,
   email:String,
  subject:String,
    images: [String], 
    defaultImage: String 
});

module.exports = mongoose.model("Student",stuSchema);