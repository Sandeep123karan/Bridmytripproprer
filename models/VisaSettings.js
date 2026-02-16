const mongoose = require("mongoose");

const visaSettingsSchema = new mongoose.Schema(
  {
    apiKey: { type: String, default: "" },
    apiSecret: { type: String, default: "" },
    commission: { type: Number, default: 0 },      // percent
    serviceFee: { type: Number, default: 0 },      // percent
    emailNotification: { type: Boolean, default: true },
    smsNotification: { type: Boolean, default: false },
    // optional: store metadata
    updatedBy: { type: String, default: "" },
  },
  { timestamps: true }
);

// If you want only one document, you can optionally enforce a unique key later
module.exports = mongoose.model("VisaSettings", visaSettingsSchema);
