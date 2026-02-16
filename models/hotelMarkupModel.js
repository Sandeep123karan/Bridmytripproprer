const mongoose = require("mongoose");

const hotelMarkupSchema = new mongoose.Schema({
  markupFor: String, // e.g. "B2B"
  agentClass: [String], // e.g. ["Diamond", "Platinum"]
  value: Number,
  regionType: [String], // e.g. ["Domestic", "International"]
  hotelMarkupType: String, // e.g. "Per Night"
  displayMarkup: String, // e.g. "In Tax"
  starRating: [Number], // e.g. [1,2,3,4,5]
  status: { type: String, default: "Active" },
}, { timestamps: true });

module.exports = mongoose.model("HotelMarkup", hotelMarkupSchema);
