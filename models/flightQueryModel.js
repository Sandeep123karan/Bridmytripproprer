const mongoose = require("mongoose");

const flightQuerySchema = new mongoose.Schema({
  webPartner: String,
  email: String,
  mobile: String,
  obClass: String,
  ibClass: String,
  origin: String,
  destination: String,
  created: String // e.g., "21 Jun 2025 / 5:40 PM"
}, { timestamps: true });

module.exports = mongoose.model("FlightQuery", flightQuerySchema);