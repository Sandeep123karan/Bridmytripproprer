
const mongoose = require("mongoose");

const holidayBookingSchema = new mongoose.Schema({
  refNo: { type: String, required: true },
  name: String,
  packageName: String,
  duration: String,
  travelDate: Date,
  bookingStatus: String,
  price: Number,
  type: String,
  currency: String,
  currencyRate: String,
  assign: String,
}, { timestamps: true }); // Auto createdAt + updatedAt

module.exports = mongoose.model("HolidayBooking", holidayBookingSchema);
