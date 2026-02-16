const mongoose = require("mongoose");

const flightUploadTicketSchema = new mongoose.Schema({
  businessType: { type: String, default: "B2B" },
  agentName: String,
  issueSupplier: String,
  airlineName: String,
  airlineCode: String,
  sector: String,
  pnr: String,
  ticketNo: String,
  passengerName: String,
  journeyType: String,
  departureDate: String,
  returnDate: String,
  baggage: String,
  contactNumber: String,
  emailId: String,
  remark: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FlightUploadTicket", flightUploadTicketSchema);
