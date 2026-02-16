const mongoose = require("mongoose");

const flightCouponSchema = new mongoose.Schema({
  airlineCode: String,
  flightType: String,
  journeyType: String,
  couponCode: String,
  couponType: String,
  cabinClass: String,
  value: Number,
  maxLimit: Number,
  useLimit: Number,
  expireValidity: String
}, { timestamps: true });

module.exports = mongoose.model("FlightCoupon", flightCouponSchema);