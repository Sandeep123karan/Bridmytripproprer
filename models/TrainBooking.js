// models/TrainBooking.js
const mongoose = require("mongoose");

const trainBookingSchema = new mongoose.Schema(
  {
    passengerName: { type: String, required: true },
    passengerEmail: { type: String },
    phone: { type: String },

    trainNo: { type: String, required: true },
    trainName: { type: String },

    fromStation: { type: String, required: true },
    toStation: { type: String, required: true },

    journeyDate: { type: Date, required: true },
    travelClass: { type: String, default: "Sleeper" }, // e.g. Sleeper, 3A, 2A
    seats: { type: Number, default: 1 },

    amount: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },

    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainBooking", trainBookingSchema);
