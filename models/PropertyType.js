const mongoose = require("mongoose");

const propertyTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    suppliers: [{ type: String }], // You can use ObjectId if linking to suppliers
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyType", propertyTypeSchema);
