// const mongoose = require("mongoose");

// const flightBookingSchema = new mongoose.Schema({
//   refNo: Number,
//   bookingSource: String,
//   airline: String,
//   journeyType: String,
//   sector: String,
//   leadPassenger: String,
//   pnr: String,
//   supplier: String,
//   sellingFare: Number,
//   purchaseFare: Number,
//   payStatus: String,
//   bookStatus: String,
//   type: String,
//   bookingCurrency: String,
//   createdBy: String,
//   bookingDate: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("FlightBooking", flightBookingSchema);
const mongoose = require("mongoose");

const flightBookingSchema = new mongoose.Schema({
  refNo: Number,
  bookingSource: String,
  airline: String,
  journeyType: String,
  sector: String,
  leadPassenger: String,
  pnr: String,
  supplier: String,
  sellingFare: Number,
  purchaseFare: Number,
  payStatus: String,
  bookStatus: String,
  type: String,
  bookingCurrency: String,
  createdBy: String,
  bookingDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("FlightBooking", flightBookingSchema);
