const mongoose = require("mongoose");

const cruiseSchema = new mongoose.Schema({
  cruiseName: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Cruise", cruiseSchema);
