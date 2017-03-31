

const xtpl = require("xtpl");

const path = require("path");

const database = require(path.join(__dirname,"../tools/connectdatabase.js"))



exports.findAll = (req,res) => {

  database.findAll("stu1",{},(docs) => {

    xtpl.renderFile(path.join(__dirname,"../view/studentlist.html"),{studentlist:docs},(err,content) => {

    res.end(content);
  })

  })

}

exports.addOne = (req,res) => {
  

}
