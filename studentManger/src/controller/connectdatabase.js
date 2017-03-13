

"use strict"



  
 exports.connectDataBase = () => {

  var MongoClient = require('mongodb').MongoClient

  var database;
  // Connection URL 
 var url = 'mongodb://localhost:27017/stu';

  MongoClient.connect(url, function(err, db) {
  
  console.log("Connected correctly to server");

   database = db;
 

 });
return database;
 }
