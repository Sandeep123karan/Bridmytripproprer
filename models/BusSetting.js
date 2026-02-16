const mongoose = require("mongoose");

const busSettingSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("BusSetting", busSettingSchema);
