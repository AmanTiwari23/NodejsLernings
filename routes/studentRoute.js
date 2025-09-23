const express = require("express");
const studentController = require("../controllers/studentControler");
const route = express.Router();

route.get("/home",studentController.homePage);

route.get("/about",studentController.aboutPage);

route.get("/contact",studentController.contactPage);

route.get("/services",studentController.service);

route.get("/course",studentController.coursePage);

module.exports= route;