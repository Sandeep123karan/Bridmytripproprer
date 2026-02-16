const mongoose = require("mongoose");

const agentPaymentSchema = new mongoose.Schema({
  companyName: String,
  agentName: String,
  amount: Number,
  pgInfo: String,
  paymentDate: Date,
  transactionId: String,
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
  mode: String,
  adminRemark: String,
});

module.exports = mongoose.model("AgentPayment", agentPaymentSchema);
