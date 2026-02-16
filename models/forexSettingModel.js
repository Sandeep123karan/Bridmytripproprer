const mongoose = require("mongoose");

const forexSettingSchema = new mongoose.Schema({
    currency: { type: String, required: true, unique: true },
    buyRate: { type: Number, required: true },
    sellRate: { type: Number, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
}, { timestamps: true });

module.exports = mongoose.model("ForexSetting", forexSettingSchema);
