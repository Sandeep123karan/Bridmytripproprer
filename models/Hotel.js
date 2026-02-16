const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotelName: String,
  city: String,
  supplier: String,
  propertyType: String,
  starRating: Number,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  supplierStatus: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hotel', hotelSchema);
