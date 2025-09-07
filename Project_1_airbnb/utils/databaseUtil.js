const mongo = require('mongodb');
const mongo_client = mongo.MongoClient;
const url = "mongodb+srv://abdulrehmanmehmood282_db_user:root@cluster0.66of71x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;

const mongo_connect = (callback) => {
  mongo_client.connect(url).then(client => {
    _db = client.db('airbnb'); 
    callback();                
  }).catch(err => {
    console.log("error is ", err);
  });
}

const getDB = () => {
  if (!_db) {
    throw new Error('mongo not connected');
  }
  return _db;
}

exports.mongo_connect = mongo_connect;
exports.getDB = getDB;