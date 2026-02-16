const mongoose = require("mongoose");

const agentNotificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Info', 'Alert', 'Promo'], default: 'Info' },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
}, { timestamps: true });

module.exports = mongoose.model("AgentNotification", agentNotificationSchema);
