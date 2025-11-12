const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"user"}
});


module.exports = mongoose.model("Profile",profileSchema);