const mongoose = require("mongoose");

const hotelDiscountSchema = new mongoose.Schema({
  discountFor: String, // e.g., "B2B"
  agentClass: [String], // e.g., ["Diamond", "Gold"]
  value: Number,
  regionType: [String], // ["Domestic", "International"]
  extraDiscount: Number,
  maxLimit: Number,
  status: { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("HotelDiscount", hotelDiscountSchema);
