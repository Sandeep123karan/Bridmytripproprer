const mongoose = require("mongoose");

const hotelCouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    regionType: String,
    starRating: String,
    couponType: String,
    value: Number,
    maxLimit: Number,
    useLimit: Number,
    expiry: String,
    status: { type: Boolean, default: true }, // true = active
  },
  { timestamps: true }
);

module.exports = mongoose.model("HotelCoupon", hotelCouponSchema);
