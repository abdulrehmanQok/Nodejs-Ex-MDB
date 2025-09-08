const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description; 
    this._id = _id; 
  }

  save() {
    const db = getDB();
    
    if (this._id) {
      // Update existing record - exclude _id from update fields
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoUrl: this.photoUrl,
        description: this.description
      };
      
      return db.collection('homes').updateOne(
        { _id: new ObjectId(String(this._id)) }, 
        { $set: updateFields }
      );
    } else {
      // Insert new record
      return db.collection('homes').insertOne(this);
    }
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db.collection('homes').findOne({ _id: new ObjectId(String(homeId)) });
  }

static deleteById(delHomeId) {
    const db = getDB();
    return db.collection('favourites').deleteOne({homeId: delHomeId});
  }
};