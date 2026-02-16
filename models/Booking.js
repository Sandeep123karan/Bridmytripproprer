const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
