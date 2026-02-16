const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  title: String,
  image: String, // image file path
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date }
});

module.exports = mongoose.model("BlogCategory", blogCategorySchema);
