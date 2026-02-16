// const mongoose = require('mongoose');

// const addHotelSchema = new mongoose.Schema({
//   name: String,
//   city: String,
//   propertyType: String,
//   amenities: [String],
//   rating: Number,
//   status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
//   reviewUrl: String,
//   address: String,
//   postalCode: String,
//   country: String,
//   state: String,
//   coordinates: {
//     lat: Number,
//     lng: Number,
//   },
//   location: String,
//   trending: Boolean,
//   panRequired: Boolean,
//   passportRequired: Boolean,
//   promotion: Boolean,
//   description: String,
// }, { timestamps: true });

// module.exports = mongoose.model('AddHotel', addHotelSchema);

const mongoose = require('mongoose');

const addHotelSchema = new mongoose.Schema({
  hotelName: String,
  city: String,
  propertyType: String,
  amenities: [String],
  starRating: Number,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  reviewUrl: String,
  address: String,
  postalCode: String,
  country: String,

  coordinates: {
    lat: Number,
    lng: Number
  },

  state: String,
  location: String,

  trending: Boolean,
  idProofRequired: Boolean,
  promotion: Boolean,

  description: String
}, { timestamps: true });

module.exports = mongoose.model('AddHotel', addHotelSchema);
