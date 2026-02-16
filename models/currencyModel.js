const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true }, // e.g. INR, USD
    name: { type: String, required: true }, // e.g. Indian Rupee, US Dollar
    symbol: { type: String, required: true }, // e.g. ₹, $
  },
  { timestamps: true }
);

module.exports = mongoose.model("Currency", currencySchema);
