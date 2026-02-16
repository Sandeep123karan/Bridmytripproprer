const mongoose = require("mongoose");

const baggageSchema = new mongoose.Schema({
  adult: String,
  child: String,
  infant: String,
});

const manageFareRuleSchema = new mongoose.Schema({
  airType: String,
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  airline: String,
  refundableType: String,
  bookingClass: String,
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  fareRuleDescription: String,
  handBaggage: baggageSchema,
  checkInBaggage: baggageSchema,
}, { timestamps: true });

module.exports = mongoose.model("ManageFareRule", manageFareRuleSchema);
