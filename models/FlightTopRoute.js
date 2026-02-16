const mongoose = require('mongoose');

const flightTopRouteSchema = new mongoose.Schema({
  direct: Boolean,
  origin: String,
  originCode: String,
  destination: String,
  destinationCode: String,
  journeyType: String,
  departDate: String,
  returnDate: String,
  adult: Number,
  child: Number,
  infant: Number
}, { timestamps: true });

module.exports = mongoose.model('FlightTopRoute', flightTopRouteSchema);