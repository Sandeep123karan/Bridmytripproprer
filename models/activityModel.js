// const mongoose = require("mongoose");

// const activitySchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   price: Number,
//   description: String,
//   image: String, // Cloudinary URL
// }, { timestamps: true });

// module.exports = mongoose.model("Activity", activitySchema);
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  description: String,
  image: String, 
  status: {
    type: String,
    default: "Active"
  }
}, { timestamps: true });

module.exports = mongoose.model("Activity", activitySchema);
