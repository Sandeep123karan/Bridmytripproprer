const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  ruleName: String,
  departAirports: [String],
  arrivalAirports: [String],
  departCountry: String,
  arrivalCountry: String,
  tripType: [String],
  journeyType: [String],
  departFrom: Date,
  arrivalTo: Date,
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  }
}, { timestamps: true });

module.exports = mongoose.model('FlightReplaceRule', ruleSchema);
