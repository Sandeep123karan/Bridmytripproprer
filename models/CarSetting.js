const mongoose = require("mongoose");

const CarSettingSchema = new mongoose.Schema(
  {
    cityName: String,
    supplier: String,
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarSetting", CarSettingSchema);
