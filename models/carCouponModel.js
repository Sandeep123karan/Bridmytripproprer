const mongoose = require("mongoose");

const carCouponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true, unique: true },
  travelDateFrom: { type: Date, required: true },
  travelDateTo: { type: Date, required: true },
  couponType: { type: String, enum: ["flat", "percent"], required: true },
  value: { type: Number, required: true },
  minOrderValue: { type: Number },
  maxOrderValue: { type: Number },
  minCars: { type: Number },
  maxCars: { type: Number },
  maxLimit: { type: Number },
  useLimit: { type: Number },
  expireValidity: { type: Date, required: true },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model("CarCoupon", carCouponSchema);
