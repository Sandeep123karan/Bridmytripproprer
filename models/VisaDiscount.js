const mongoose = require("mongoose");

const visaDiscountSchema = new mongoose.Schema(
  {
    country: { type: String, required: true },
    discount: { type: String, required: true },
    validTill: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("VisaDiscount", visaDiscountSchema);
