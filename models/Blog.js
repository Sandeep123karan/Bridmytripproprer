const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String },
  category: { type: String },
  content: { type: String },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  createdBy: { type: String, default: "Admin" },
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);