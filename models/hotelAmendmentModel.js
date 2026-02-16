const mongoose = require("mongoose");

const hotelAmendmentSchema = new mongoose.Schema({
  bookingRefNo: String,
  amendmentId: String,
  amendmentType: String,
  amendmentStatus: String,
  hotelName: String,
  companyName: String,
  bookingSource: String,
  travellerName: String,
  checkinDate: Date,
  checkoutDate: Date,
  city: String,
  country: String,
  bookingStatus: String,
  adminRemark: String,
  generatedBy: String,
  amdStaff: String,
  summary: String
}, { timestamps: true });

module.exports = mongoose.model("HotelAmendment", hotelAmendmentSchema);
