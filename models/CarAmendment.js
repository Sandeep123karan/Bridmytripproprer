const mongoose = require("mongoose");

const carAmendmentSchema = new mongoose.Schema({
  amendmentId: String,
  amendmentType: String,
  status: String,
  destination: String,
  car: String,
  type: String,
  travelDate: String,
  companyName: String,
  bookingSource: String,
  bookingStatus: String,
  remark: String,
  createdBy: String,
}, { timestamps: true });

module.exports = mongoose.model("CarAmendment", carAmendmentSchema);
