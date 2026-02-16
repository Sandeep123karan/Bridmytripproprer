const mongoose = require("mongoose");

const busCouponSchema = new mongoose.Schema({
  code: { type: String, required: true },
  discount: { type: Number, required: true },
  expiryDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("BusCoupon", busCouponSchema);
