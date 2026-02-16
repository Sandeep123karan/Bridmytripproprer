  const mongoose = require("mongoose");

  const supplierSchema = new mongoose.Schema({
    service: String,
    supplierName: String,
    email: String,
    mobile: String,
    status: { type: String, default: "Active" },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model("Supplier", supplierSchema);
