const express = require("express");
const router = express.Router();
const studentcontroller = require("../controllers/stuController") 


router.post("/save", studentcontroller.dataSave);
router.post("/booksave", studentcontroller.bookdataSave);
router.get("/display1", studentcontroller.dataDisplay1);
router.post("/insert",studentcontroller.dataSave);
router.get("/display",studentcontroller.dataDisplay);
router.post("/search",studentcontroller.search);
router.get("/updateData",studentcontroller.updateDisplay);
router.delete("/updatedelete",studentcontroller.updateDelete);
router.get("/editdatadisplay/:id",studentcontroller.editdatadisplay);
router.post("/editdata",studentcontroller.editdata);



module.exports = router;