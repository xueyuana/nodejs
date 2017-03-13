
const fs = require("fs")
const path = require("path");
const MongoClient = require('mongodb').MongoClient

const database = require(path.join(__dirname,"connectdatabase.js"))

exports.getLogin = (req,res) => {

  fs.readFile(path.join(__dirname,"../view/login.html"),(err,content) => {

    res.setHeader("Content-Type","text/html;charset=utf-8");

    res.end(content);
  })

}

exports.postLogin = (req,res) => {

  console.log(req.body)

  var db = database.connectDataBase();
  console.log(db);

  // var collection = db.collection("account");

  // collection.find({}).toArray(function(err, docs) {
  
  //   console.log(docs);
  // });

    
    res.end("post success");

}


