
const fs = require("fs")
const path = require("path");

exports.getLogin = (req,res) => {
  fs.readFile(path.join(__dirname,"../view/login.html"),(err,content) => {

    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end(content);
  })

}


