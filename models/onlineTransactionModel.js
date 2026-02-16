const mongoose = require("mongoose");

const onlineTransactionSchema = new mongoose.Schema({
  transactionId: String,
  orderId: String,
  bookingRefNo: String,
  service: String,
  amount: Number,
  convenienceFee: Number,
  status: String,
  remark: String,
  company: String,
  customerName: String,
  email: String,
  mobile: String,
  paymentSource: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("OnlineTransaction", onlineTransactionSchema);
