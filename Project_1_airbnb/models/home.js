const {getDB} = require("../utils/databaseUtil");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    const db=getDB();
    return db.collection('homes').insertOne(this);
  }

  static fetchAll(callback) {
    const db=getDB();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId, callback) {
    
  }

  static deleteById(homeId, callback) {
  }
};
