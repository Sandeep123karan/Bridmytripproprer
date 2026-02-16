const mongoose = require("mongoose");

const offlineFlightSchema = new mongoose.Schema({
  supplier: { type: String, required: true },
  holdDays: { type: Number, default: 0 },
  airline: { type: String, required: true },
  fromAirportCode: { type: String, required: true },
  toAirportCode: { type: String, required: true },
  isHold: { type: Boolean, default: false },
  isOffline: { type: Boolean, default: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model("OfflineFlight", offlineFlightSchema);
