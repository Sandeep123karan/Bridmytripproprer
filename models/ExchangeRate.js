const mongoose = require("mongoose");

const exchangeRateSchema = new mongoose.Schema(
  {
    fromCurrency: { type: String, required: true },
    toCurrency: { type: String, required: true },
    rate: { type: Number, required: true },

    // ⭐ ADD THESE FIELDS BELOW
    effectiveDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExchangeRate", exchangeRateSchema);
