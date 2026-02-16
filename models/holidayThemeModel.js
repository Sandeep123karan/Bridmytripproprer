// const mongoose = require("mongoose");

// const holidayThemeSchema = new mongoose.Schema({
//   themeImage: { type: String },
//   themeName: { type: String, required: true },
//   supplier: { type: String },
//   themeSlug: { type: String },
//   showOnHome: { type: Boolean, default: false },
//   startingPrice: { type: Number },
//   status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
// }, { timestamps: true });

// module.exports = mongoose.model("HolidayTheme", holidayThemeSchema);
const mongoose = require("mongoose");

const holidayThemeSchema = new mongoose.Schema({
  themeImage: { type: String },
  themeName: { type: String, required: true },
  supplier: { type: String },
  themeSlug: { type: String },
  showOnHome: { type: Boolean, default: false },
  startingPrice: { type: Number },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("HolidayTheme", holidayThemeSchema);
