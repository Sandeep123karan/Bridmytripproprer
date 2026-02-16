const mongoose = require("mongoose");

const clubMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  membershipType: { type: String, enum: ["Silver", "Gold", "Platinum"], default: "Silver" },
  joinedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("ClubMember", clubMemberSchema);
