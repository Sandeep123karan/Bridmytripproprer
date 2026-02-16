const mongoose = require("mongoose");

const forexMarkupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  markupValue: { type: Number, required: true },
  type: { type: String, enum: ["Percentage", "Flat"], default: "Percentage" },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("ForexMarkup", forexMarkupSchema);
