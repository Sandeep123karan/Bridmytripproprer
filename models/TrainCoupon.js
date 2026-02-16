const mongoose = require("mongoose");

const trainCouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    discountType: { type: String, enum: ["Percentage", "Flat"], default: "Flat" },
    discountValue: { type: Number, required: true },
    minAmount: { type: Number, default: 0 },
    maxDiscount: { type: Number, default: 0 },

    validFrom: { type: Date, required: true },
    validTill: { type: Date, required: true },

    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainCoupon", trainCouponSchema);
