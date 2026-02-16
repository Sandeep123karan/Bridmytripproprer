// const mongoose = require('mongoose');

// const addHolidaySchema = new mongoose.Schema({
//   packageName: String,
//   slug: String,
//   nights: String,
//   departureDate: Date,
//   standardPrice: String,
//   deluxePrice: String,
//   luxuryPrice: String,
//   tcsRate: String,
//   packageImage: String,
//   packageIncludes: String,
//   showOnHome: Boolean,
//   priceOnRequest: Boolean,
//   halal: Boolean,
//   bookOnline: Boolean,
//   passportAdult: Boolean,
//   passportChild: Boolean,
//   domestic: Boolean,
//   panRequiredAdult: Boolean,
//   panRequiredChild: Boolean,
//   themes: [String],
//   metaRobots: String,
//   metaTitle: String,
//   metaKeyword: String,
//   metaDescription: String,
// }, { timestamps: true });

// module.exports = mongoose.model('AddHoliday', addHolidaySchema);
const mongoose = require("mongoose");

const addHolidaySchema = new mongoose.Schema({
  packageName: String,
  slug: String,
  nights: String,
  departureDate: Date,
  standardPrice: String,
  deluxePrice: String,
  luxuryPrice: String,
  tcsRate: String,
  packageImage: String,  // Cloudinary URL
  packageIncludes: String,
  showOnHome: Boolean,
  priceOnRequest: Boolean,
  halal: Boolean,
  bookOnline: Boolean,
  passportAdult: Boolean,
  passportChild: Boolean,
  domestic: Boolean,
  panRequiredAdult: Boolean,
  panRequiredChild: Boolean,
  themes: [String],
  metaRobots: String,
  metaTitle: String,
  metaKeyword: String,
  metaDescription: String,
}, { timestamps: true });

module.exports = mongoose.model("AddHoliday", addHolidaySchema);
