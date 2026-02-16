const mongoose = require('mongoose');

const documentRequirementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  requiredFor: [String] // e.g., ["passport", "visa"]
}, { timestamps: true });

module.exports = mongoose.model('DocumentRequirement', documentRequirementSchema);
