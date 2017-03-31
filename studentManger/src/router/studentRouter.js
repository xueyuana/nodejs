

const express = require("express")
const path = require("path");

const studentRouter = express.Router();

const student = require(path.join(__dirname,"../controller/studentController.js"));

studentRouter.get("/list",student.findAll);

studentRouter.get("/add",student.addOne);

module.exports = studentRouter;
