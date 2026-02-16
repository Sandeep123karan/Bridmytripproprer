const mongoose = require("mongoose");

const busAmendmentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "BusBooking", required: true },
  changesRequested: { type: String, required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("BusAmendment", busAmendmentSchema);
