const mongoose = require("mongoose");

const holidayQuerySchema = new mongoose.Schema({
  webPartner: String,
  name: String,
  email: String,
  mobile: String,
  travelDate: String,
  travellers: Number,
  nights: Number,
  package: String,
  message: String,
  created: String
});

module.exports = mongoose.model("HolidayQuery", holidayQuerySchema);
