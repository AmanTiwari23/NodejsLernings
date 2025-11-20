const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 



router.post("/registration",studentcontroller.stuRegistration);
router.post("/login",studentcontroller.stuLogin);


module.exports = router;