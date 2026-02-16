const mongoose = require('mongoose');

const hotelTicketSchema = new mongoose.Schema({
  businessType: String,
  agentName: String,
  issueSupplier: String,

  hotelCity: String,
  hotelName: String,
  address: String,
  starRating: String,
  checkIn: Date,
  checkOut: Date,
  passportRequired: Boolean,
  hotelPolicy: String,

  dialCode: String,
  contactNumber: String,
  emailId: String
}, { timestamps: true });

module.exports = mongoose.model("HotelTicket", hotelTicketSchema);
