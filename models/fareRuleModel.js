const mongoose = require("mongoose");

const baggageSchema = new mongoose.Schema({
  adult: String,
  child: String,
  infant: String,
});

const fareRuleSchema = new mongoose.Schema(
  {
    airType: String,
    refundableType: String,
    airline: String,
    bookingClass: String,
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    fareRuleDescription: String, // HTML
    handBaggage: baggageSchema,
    checkInBaggage: baggageSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model("FareRule", fareRuleSchema);