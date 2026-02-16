// const mongoose = require('mongoose');

// const flightMarkupSchema = new mongoose.Schema({
//   markupFor: String,
//   agentClass: String,
//   airlineCode: String,
//   flightType: String,
//   journeyType: String,
//   markupType: String,
//   amount: Number,
//   cabinClass: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('FlightMarkup', flightMarkupSchema);
const mongoose = require("mongoose");

const flightMarkupSchema = new mongoose.Schema(
  {
    markupFor: String,
    agentClass: String,
    airlineCode: String,
    flightType: String,
    journeyType: String,
    markupType: String,
    amount: Number,
    cabinClass: String,
    status: { type: String, default: "Active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("FlightMarkup", flightMarkupSchema);
