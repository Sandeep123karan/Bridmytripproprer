const mongoose = require('mongoose');

const holidayMarkupSchema = new mongoose.Schema({
  markupFor: { type: String, required: true }, // B2C or B2B
  agentClass: { type: String, required: true },
  value: { type: Number, required: true },
  maxLimit: { type: Number, required: true },
  themeName: { type: String, default: "ANY" },
  destinationName: { type: String, default: "ANY" },
  markupType: { type: String, enum: ['Fixed', 'Percentage'], default: "Fixed" },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model('HolidayMarkup', holidayMarkupSchema);
