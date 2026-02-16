// const mongoose = require("mongoose");

// const busBookingSchema = new mongoose.Schema({
//   route: { type: mongoose.Schema.Types.ObjectId, ref: "BusRoute" },
//   passengerName: String,
//   seatNumber: String,
//   bookingDate: Date,
//   status: { type: String, enum: ["booked", "cancelled"], default: "booked" },
//   amount: Number,
// }, { timestamps: true });

// module.exports = mongoose.model("BusBooking", busBookingSchema);
const mongoose = require("mongoose");

const busBookingSchema = new mongoose.Schema(
  {
    passengerName: { type: String, required: true },
    seatNumber: { type: String, required: true },

    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusRoute",
      required: true,
    },

    bookingDate: { type: Date, required: true },

    amount: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusBooking", busBookingSchema);
