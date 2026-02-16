// const mongoose = require("mongoose");

// const carSchema = new mongoose.Schema(
//   {
//     carName: String,
//     carModel: String,
//     fuelType: String,
//     carType: String,
//     seatCapacity: String,
//     gearType: String,
//     carColor: String,
//     carCategory: String,
//     pickupLocation: String,
//     dropLocation: String,
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Car", carSchema);


const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  carId: { type: String, required: true },
  name: { type: String },
  supplier: { type: String },
  price: { type: Number },
  currency: { type: String },
  location: { type: String },
  rating: { type: Number },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", carSchema);
