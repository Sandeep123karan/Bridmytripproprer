const mongoose = require("mongoose");

const trainAmendmentSchema = new mongoose.Schema(
  {
    passengerName: { type: String, required: true },
    passengerEmail: { type: String },
    phone: { type: String },

    trainNo: { type: String, required: true },
    trainName: { type: String },

    oldInfo: { type: String, required: true },
    newInfo: { type: String, required: true },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainAmendment", trainAmendmentSchema);
