// const mongoose = require('mongoose');

// const liveFlightSchema = new mongoose.Schema({
//   airline: String,
//   origin: String,
//   destination: String,
//   departure_time: String,
//   arrival_time: String,
//   baseFare: Number,
//   tax: Number,
//   convenienceFee: Number,
//   totalFare: Number
// }, { timestamps: true });

// module.exports = mongoose.model('LiveFlight', liveFlightSchema);

const mongoose = require("mongoose");

const liveFlightSchema = new mongoose.Schema(
  {
    airline: String,
    origin: String,
    destination: String,
    departure_time: String,
    arrival_time: String,
    baseFare: Number,
    tax: Number,
    convenienceFeeType: String,
    convenienceFeeValue: Number,
    totalFare: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("LiveFlight", liveFlightSchema);