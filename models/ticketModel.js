const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  apiSupplier: { type: String, required: true },
  issueSupplier: { type: String, required: true },
  pnr: { type: String, required: true },
  lastName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);
