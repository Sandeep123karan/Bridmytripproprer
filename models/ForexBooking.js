// const mongoose = require("mongoose");

// const forexBookingSchema = new mongoose.Schema(
//   {
//     bookingId: { type: String, required: true, unique: true },
//     userName: { type: String, required: true },
//     userEmail: { type: String, required: true },
//     currency: { type: String, required: true },
//     amount: { type: Number, required: true },
//     status: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Cancelled"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("ForexBooking", forexBookingSchema);
const mongoose = require("mongoose");

const forexBookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    currencyType: { type: String, required: true },
    amount: { type: Number, required: true },
    bookingDate: { type: Date, required: true },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForexBooking", forexBookingSchema);
