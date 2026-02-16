const mongoose = require('mongoose');

const flightFareSchema = new mongoose.Schema({
  airline: String,
  originAirport: String,
  destinationAirport: String,
  supplierFareType: String,
  apiFareType: String,
  apiSupplier: String,
  baseFare: Number,
  tax: Number,
  currency: String,
  validFrom: Date,
  validTo: Date
}, { timestamps: true });

module.exports = mongoose.model('FlightFare', flightFareSchema);
