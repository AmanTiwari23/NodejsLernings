const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 



router.post("/registration",studentcontroller.stuRegistration);


module.exports = router;