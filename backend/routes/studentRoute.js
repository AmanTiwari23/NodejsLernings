const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 

router.post("/insert",studentcontroller.dataSave);
router.get("/display",studentcontroller.display);
router.post("/search",studentcontroller.search);
router.get("/updateData",studentcontroller.updateDisplay);
router.delete("/updatedelete",studentcontroller.updateDelete);


module.exports = router;