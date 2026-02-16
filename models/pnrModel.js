const mongoose = require("mongoose");

const pnrSchema = new mongoose.Schema(
  {
    pnr: { type: String, required: true, unique: true },

    trainNo: String,
    trainName: String,
    journeyDate: String,
    chartStatus: String,

    passengers: [
      {
        name: String,
        age: String,
        gender: String,
        status: String,
        bookingStatus: String,
        currentStatus: String,
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("PNR", pnrSchema);
