
//创建子路由acountRouter

const express = require("express")

const path = require("path")

const accountRouter = express.Router()
//导入路由对应的控制器
const accountController = require(path.join(__dirname,"../controller/acountController.js"))

accountRouter.get("/login", accountController.getLogin)

accountRouter.post("/login",accountController.postLogin)

module.exports = accountRouter;
