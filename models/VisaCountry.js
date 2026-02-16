const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  passport: { type: String, required: true },
  requirement: { type: String },
  stay: { type: String },
  notes: { type: String },
});

const visaCountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  iso2: { type: String, required: true },
  flagUrl: { type: String },
  policies: [policySchema],
});

module.exports = mongoose.model("VisaCountry", visaCountrySchema);
