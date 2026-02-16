const mongoose = require("mongoose");

const trainDiscountSchema = new mongoose.Schema(
  {
    trainNo: { type: String, required: true },
    trainName: { type: String },
    classType: { type: String, required: true }, // Sleeper, 3A, etc.
    discountPercentage: { type: Number, required: true },
    maxDiscount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainDiscount", trainDiscountSchema);
