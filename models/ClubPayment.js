const mongoose = require("mongoose");

const clubPaymentSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["Membership", "Event"], required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Paid", "Pending"], default: "Paid" }
}, { timestamps: true });

module.exports = mongoose.model("ClubPayment", clubPaymentSchema);
