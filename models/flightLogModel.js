const mongoose = require("mongoose");

const flightLogSchema = new mongoose.Schema({
  from: String,
  to: String,
  air: String,
  cabin: String,
  obClass: String,
  ibClass: String,
  adult: Number,
  child: Number,
  infant: Number,
  total: Number,
  departDate: String,
  returnDate: String,
  ipAddress: String,
  requestedTime: String,
  guid: String,
}, { timestamps: true });

module.exports = mongoose.model("FlightLog", flightLogSchema);
