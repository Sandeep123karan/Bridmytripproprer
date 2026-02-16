const mongoose = require("mongoose");
const HolidaySchema = new mongoose.Schema({
  packageName: String,
  showOnHome: String,
  standardPrice: Number,
  deluxePrice: Number,
  luxuryPrice: Number,
  status: String,
  date: String,
  type: String,
});
module.exports = mongoose.model("Holiday", HolidaySchema);