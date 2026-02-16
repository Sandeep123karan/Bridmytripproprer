const mongoose = require("mongoose");

const cruiseBookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    cruiseName: { type: String, required: true },
    seats: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CruiseBooking", cruiseBookingSchema);
