
const mongoose = require("mongoose");

const trainRouteSchema = new mongoose.Schema({
  trainNo: {
    type: String,
    required: true,
  },
  trainName: {
    type: String,
  },
  source: {
    code: { type: String, required: true },
    name: { type: String, required: true }
  },
  destination: {
    code: { type: String, required: true },
    name: { type: String, required: true }
  },
  duration: {
    type: String, // "10h 25m" format
  },
  route: [
    {
      stationCode: String,
      stationName: String,
      arrival: String,
      departure: String,
      day: Number,
      distance: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TrainRoute", trainRouteSchema);
