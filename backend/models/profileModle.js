const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});


module.exports = mongoose.model("Profile",profileSchema);