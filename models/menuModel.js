const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Menu", menuSchema);
