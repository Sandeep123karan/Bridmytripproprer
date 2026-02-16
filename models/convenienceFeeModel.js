// const mongoose = require('mongoose');

// const convenienceFeeSchema = new mongoose.Schema({
//   feeFor: { type: String, required: true }, // B2B, B2C etc.
//   paymentGateway: { type: String, required: true }, // e.g. PhonePe, Razorpay
//   services: [String], // ["Flight", "Hotel", ...]
//   amountMin: { type: Number, required: true },
//   amountMax: { type: Number, required: true },
//   agentClasses: [String], // ["Gold", "Silver"]
//   creditCardType: { type: String } // e.g. Single
// }, { timestamps: true });

// module.exports = mongoose.model("ConvenienceFee", convenienceFeeSchema);

const mongoose = require('mongoose');

const convenienceFeeSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  fareType: { type: String, required: true },
  feeType: { type: String, enum: ['Fixed', 'Percentage'], required: true },
  value: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('ConvenienceFee', convenienceFeeSchema);
