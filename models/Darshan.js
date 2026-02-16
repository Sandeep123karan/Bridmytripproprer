const mongoose = require("mongoose");

const darshanSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },          // Darshan ka naam
    location: { type: String, required: true },      // Mandir/Place
    date: { type: Date, required: true },            // Darshan date
    time: { type: String, required: true },          // Darshan time
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    createdBy: { type: String },                     // kisne add kiya
  },
  { timestamps: true }
);

module.exports = mongoose.model("Darshan", darshanSchema);
