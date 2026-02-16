const mongoose = require("mongoose");

const carMarkupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  status: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("CarMarkup", carMarkupSchema);
