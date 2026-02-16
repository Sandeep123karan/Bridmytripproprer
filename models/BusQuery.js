const mongoose = require("mongoose");

const busQuerySchema = new mongoose.Schema({
  userQuery: { type: String, required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: "BusRoute" },
  response: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("BusQuery", busQuerySchema);
