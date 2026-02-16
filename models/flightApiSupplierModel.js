const mongoose = require("mongoose");

const flightApiSupplierSchema = new mongoose.Schema({
  apiSupplier: { type: String, required: true },
  airType: String,
  searchType: String,
  allowedAirlines: [String],
  excludedAirlines: [String],
  status: { type: String, default: "Active" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FlightApiSupplier", flightApiSupplierSchema);