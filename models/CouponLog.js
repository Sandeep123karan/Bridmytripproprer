const mongoose = require("mongoose");

const couponLogSchema = new mongoose.Schema({
  bookingReference: String,
  token: String,
  service: String,
  couponCode: String,
  couponInfo: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CouponLog", couponLogSchema);
