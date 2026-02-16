// models/moneyTransferModel.js
const mongoose = require("mongoose");

const moneyTransferSchema = new mongoose.Schema(
  {
    transactionId: { type: String, required: true, unique: true }, // admin generated or UUID
    senderName: { type: String, required: true },
    senderCountry: { type: String },
    receiverName: { type: String, required: true },
    receiverCountry: { type: String },
    fromCurrency: { type: String, required: true },
    toCurrency: { type: String, required: true },
    amount: { type: Number, required: true },         // amount in fromCurrency
    convertedAmount: { type: Number },                // amount in toCurrency (optional)
    exchangeRate: { type: Number },                   // rate used
    fees: { type: Number, default: 0 },               // total fees charged
    status: { type: String, enum: ["pending","completed","failed","cancelled"], default: "pending" },
    notes: { type: String },
    processedBy: { type: String },                    // admin id or name
    processedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MoneyTransfer", moneyTransferSchema);
