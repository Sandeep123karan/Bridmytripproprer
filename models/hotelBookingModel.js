
const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema(
  {
    refNo: String,
    bookingSource: String,
    hotelName: String,
    destination: String,
    checkinDate: String,
    checkoutDate: String,
    fare: String,
    payStatus: String,
    bookStatus: String,
    cnfNumber: String,
    supplier: String,
    type: String,
    bookingCurrency: String,
    currencyRate: String,
    assignUser: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("HotelBooking", hotelBookingSchema);
