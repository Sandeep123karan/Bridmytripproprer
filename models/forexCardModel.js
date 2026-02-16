// models/forexCardModel.js
const mongoose = require("mongoose");

const forexCardSchema = new mongoose.Schema(
  {
    provider: { type: String, required: true },           // e.g. HDFC, ICICI
    cardName: { type: String, required: true },           // e.g. Multi-currency Forex Card
    supportedCurrencies: [{ type: String, required: true }], // ["USD","EUR"]
    markupFee: { type: Number, default: 0 },              // percent
    annualFee: { type: Number, default: 0 },
    reloadFee: { type: Number, default: 0 },
    deliveryCharge: { type: Number, default: 0 },
    minLoadAmount: { type: Number, default: 0 },
    maxLoadAmount: { type: Number, default: 0 },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForexCard", forexCardSchema);
