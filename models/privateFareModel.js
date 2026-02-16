const mongoose = require("mongoose");

const privateFareSchema = new mongoose.Schema({
  inventoryName: String,
  supplier: String,
  source: String,
  sourceTerminal: String,
  tripType: String,
  journeyType: String,
  destination: String,
  destinationTerminal: String,
  flightNumber: String,
  airline: String,
  seat: String,
  fromDate: Date,
  toDate: Date,
}, { timestamps: true });

module.exports = mongoose.model("PrivateFare", privateFareSchema);
