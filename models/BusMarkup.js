const mongoose = require("mongoose");

const busMarkupSchema = new mongoose.Schema({
  type: { type: String, enum: ["percentage", "flat"], required: true },
  value: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("BusMarkup", busMarkupSchema);
