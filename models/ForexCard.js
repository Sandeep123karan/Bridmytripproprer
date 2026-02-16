// import mongoose from "mongoose";

// const forexCardSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   currency: { type: mongoose.Schema.Types.ObjectId, ref: "Currency", required: true },
//   amount: { type: Number, required: true },
//   transactionType: { type: String, enum: ["buy", "sell"], required: true },
//   date: { type: Date, default: Date.now }
// }, { timestamps: true });

// export default mongoose.model("ForexCard", forexCardSchema);
const mongoose = require("mongoose");

const forexCardSchema = new mongoose.Schema(
  {
    provider: { type: String, required: true },
    cardName: { type: String, required: true },

    supportedCurrencies: {
      type: [String],
      default: [],
    },

    markupFee: { type: Number, default: 0 },
    annualFee: { type: Number, default: 0 },
    reloadFee: { type: Number, default: 0 },
    deliveryCharge: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForexCard", forexCardSchema);
