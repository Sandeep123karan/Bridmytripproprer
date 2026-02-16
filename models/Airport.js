const mongoose = require("mongoose");

const airportSchema = new mongoose.Schema({
  airportCode: String,
  airportName: String,
  cityCode: String,
  countryName: String,
  countryCode: String,
  lat: String,
  lon: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Airport", airportSchema);
