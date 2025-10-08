const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 

router.post("/insert",studentcontroller.dataSave);
router.get("/display",studentcontroller.display);

module.exports = router;