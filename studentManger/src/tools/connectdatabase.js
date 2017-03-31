

"use strict"

 var MongoClient = require('mongodb').MongoClient

  // Connection URL 
 var url = 'mongodb://localhost:27017/stu';

 let database

  MongoClient.connect(url, function(err, db) {
  
  console.log("Connected correctly to server");

   database = db;
 

 });


  
 exports.findOne = (coll,query,callback) => {

   // Get the documents collection 
  var collection = database.collection(coll);
  // Find some documents 
  collection.findOne(query,(err,doc) => {
    callback(doc);
  })
 }

 exports.findAll = (coll,query,callback) => {
   // Get the documents collection 
  var collection = database.collection(coll);
  // Find some documents 
 collection.find(query).toArray(function(err, docs) {
  
    callback(docs);
  });
 }

exports.addOne = (coll,query,callback) => {

  database.collection(coll).insertOne(query, (err,result) => {
    if(err){
      console.log(err)
    }
    callback(result);
  });
}
