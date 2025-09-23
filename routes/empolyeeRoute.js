const express = require("express");
const employeeController = require("../controllers/empolyecontroller");
const route = express.Router();

route.get("/home", employeeController.homePage);

route.get("/about",employeeController.aboutPage);

route.get("/designation",employeeController.departmentPage);

route.get("/department",employeeController.departmentPage);

route.get("/salary", employeeController.salaryPage);

module.exports = route;

