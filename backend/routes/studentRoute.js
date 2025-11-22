const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 



router.post("/registration",studentcontroller.stuRegistration);
router.post("/login",studentcontroller.stuLogin);

router.post("/userauth",studentcontroller.userAuth);
router.post("/stusave", studentcontroller.stuSave);
router.get("/display", studentcontroller.stuDisplay);

module.exports = router;