const mongoose = require("mongoose");

const busDiscountSchema = new mongoose.Schema({
  code: { type: String, required: true },
  type: { type: String, enum: ["percentage", "flat"], required: true },
  value: { type: Number, required: true },
  expiryDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("BusDiscount", busDiscountSchema);
