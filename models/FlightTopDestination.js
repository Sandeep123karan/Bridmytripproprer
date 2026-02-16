const mongoose = require("mongoose");

const flightTopDestinationSchema = new mongoose.Schema({
  image: String,
  destinationName: String,
  title: String,
  price: Number,
  shortDescription: String,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FlightTopDestination", flightTopDestinationSchema);
