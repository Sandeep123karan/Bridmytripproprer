const mongoose = require('mongoose');

const holidayDiscountSchema = new mongoose.Schema({
  discountFor: { type: String, required: true },
  agentClass: { type: String, required: true },
  value: { type: Number, required: true },
  maxLimit: { type: Number, required: true },
  themeName: { type: String, default: 'ANY' },
  destinationName: { type: String, default: 'ANY' },
  extraDiscount: { type: Number, default: 0 },
  discountType: { type: String, enum: ['Fixed', 'Percentage'], default: 'Fixed' },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('HolidayDiscount', holidayDiscountSchema);
