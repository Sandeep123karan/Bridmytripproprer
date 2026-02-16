const mongoose = require("mongoose");

const clubEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: String,
  organizer: String,
  price: { type: Number, default: 0 },
  status: { type: String, default: "Upcoming" }
}, { timestamps: true });

module.exports = mongoose.model("ClubEvent", clubEventSchema);
