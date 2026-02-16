// const mongoose = require("mongoose");

// const clubBookingSchema = new mongoose.Schema({
//   memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: "ClubEvent", required: true },
//   bookingDate: { type: Date, default: Date.now },
//   status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" }
// }, { timestamps: true });

// module.exports = mongoose.model("ClubBooking", clubBookingSchema);
const mongoose = require("mongoose");

const clubBookingSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: "ClubMember", required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "ClubEvent", required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Confirmed", "Cancelled"], default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("ClubBooking", clubBookingSchema);
