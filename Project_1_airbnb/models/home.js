const mongoose = require("mongoose");
const Favourite = require("../models/favourite");

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
});

// Clean up favourites when a home is deleted
homeSchema.pre("findOneAndDelete", async function (next) {
  console.log("came to pre hook");
  try {
    const homeId = this.getQuery()._id;
    if (homeId) {
      await Favourite.deleteMany({ homeId: homeId }); // match field name correctly
      console.log(`Deleted favourites for home: ${homeId}`);
    }
    next();
  } catch (err) {
    console.log("Error in pre hook: ", err);
    next(err);
  }
});

module.exports = mongoose.model("Home", homeSchema);
