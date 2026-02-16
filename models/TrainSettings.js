const mongoose = require("mongoose");

const trainSettingsSchema = new mongoose.Schema(
  {
    markup: { type: Number, default: 0 },          // %
    serviceCharge: { type: Number, default: 0 },   // ₹
    gst: { type: Number, default: 0 },             // %
    convenienceFee: { type: Number, default: 0 },  // ₹
    irctcCharge: { type: Number, default: 0 },     // ₹
    refundCharge: { type: Number, default: 0 },    // ₹
    supportEmail: { type: String, default: "" },
    supportPhone: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainSettings", trainSettingsSchema);
