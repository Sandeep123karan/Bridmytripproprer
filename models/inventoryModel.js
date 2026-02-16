// File: models/inventoryModel.js
const mongoose = require("mongoose");

const segmentSchema = new mongoose.Schema({
  originAirportCode: String,
  originTerminal: String,
  destinationAirportCode: String,
  destinationTerminal: String,
  airlineCode: String,
  flightNumber: String,
  aircraft: String,
  departureTime: String,
  arrivalTime: String,
  isArrivalNextDay: Boolean,
});

const inventorySchema = new mongoose.Schema(
  {
    inventoryName: String,
    disableBeforeHr: String,
    tripType: String,
    journeyType: String,
    segments: [segmentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
