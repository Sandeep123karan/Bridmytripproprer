const mongoose = require("mongoose");

const emailTemplateSchema = new mongoose.Schema({
  title: String,
  service: String,
  status: String,
  subject: String
}, { timestamps: true });

module.exports = mongoose.model("EmailTemplate", emailTemplateSchema);
