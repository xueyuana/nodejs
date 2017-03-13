
//创建子路由acount

const express = require("express")

const acountRouter = express.Router()

const acountController = require(path.join(__dirname,"../controller/acountController.js"))

acountRouter.get("/login", acountController.getLogin)
