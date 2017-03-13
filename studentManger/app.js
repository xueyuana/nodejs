"use strict"

const express = require("express")

const path = require("path");

const bodyParser = require("body-parser");


//创建服务器
var app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())


//处理静态资源

app.use(express.static(path.join(__dirname,"./src/static")))

//引入子路由
const accountRouter = require(path.join(__dirname,"src/router/acount.js"))

app.use("/account",accountRouter);

//开启服务器
app.listen(3000,"127.0.0.1",(err) => {
  if(err){
    console.log(err)
  }
  console.log("success");
})


