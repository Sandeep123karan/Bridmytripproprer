const mongoose = require("mongoose");

const holidayCouponSchema = new mongoose.Schema({
  couponCode: { type: String, required: true },
  travelDateFrom: { type: Date, required: true },
  travelDateTo: { type: Date, required: true },
  couponType: { type: String, enum: ["Fixed", "Percentage"], required: true },
  value: { type: Number, required: true },
  maxLimit: { type: Number, required: true },
  themeName: { type: String, default: "ANY" },
  destinationName: { type: String, default: "ANY" },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("HolidayCoupon", holidayCouponSchema);
