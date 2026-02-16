const mongoose = require("mongoose");

const carDiscountSchema = new mongoose.Schema({
  discountFor: { type: String, enum: ["B2B", "B2C"], required: true },
  agentClass: { type: String }, // can be comma-separated classes
  value: { type: Number, required: true },
  maxLimit: { type: Number },
  discountType: { type: String, enum: ["fixed", "percent"], required: true },
  extraDiscount: { type: Number, default: 0 },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model("CarDiscount", carDiscountSchema);
