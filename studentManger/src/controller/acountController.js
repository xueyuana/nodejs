
const fs = require("fs")
const path = require("path");

const database = require(path.join(__dirname,"../tools/connectdatabase.js"))

exports.getLogin = (req,res) => {

  fs.readFile(path.join(__dirname,"../view/login.html"),(err,content) => {

    res.setHeader("Content-Type","text/html;charset=utf-8");

    res.end(content);
  })

}

exports.postLogin = (req,res) => {

  console.log(req.body)

  database.findOne("account",req.body,(doc) => {
    console.log(doc);
    if(doc!=null){
      res.end("<script>window.location.href = '/student/list'</script>");
    }else{
      res.end("<script> window.location.href ='/account/login';</script>")
      // "<script> window.location.herf ='/account/login';</script>"?
      // "<script>alert('用户或是密码有误');window.location.href='/account/login';</script>"
    }
  })
}


