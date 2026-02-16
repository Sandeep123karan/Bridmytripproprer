const mongoose = require("mongoose");

const trainMarkupSchema = new mongoose.Schema(
  {
    trainNo: { type: String, required: true },
    trainName: { type: String },

    classType: {
      type: String,
      enum: ["Sleeper", "3A", "2A", "1A"],
      required: true,
    },

    baseFare: { type: Number, default: 0 },     // optional
    markupPercentage: { type: Number, required: true }, // ex: 10%
    finalFare: { type: Number, default: 0 },    // calculated automatically

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

// Auto-calc finalFare
trainMarkupSchema.pre("save", function (next) {
  this.finalFare = this.baseFare + (this.baseFare * this.markupPercentage) / 100;
  next();
});

module.exports = mongoose.model("TrainMarkup", trainMarkupSchema);
