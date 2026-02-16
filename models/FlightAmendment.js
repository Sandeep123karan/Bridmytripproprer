// const mongoose = require("mongoose");

// const flightAmendmentSchema = new mongoose.Schema({
//   bookingRefNo: Number,
//   bookingSource: String,
//   amendmentId: String,
//   amendmentType: String,
//   amendmentStatus: String,
//   journeyType: String,
//   sector: String,
//   departureDate: Date,
//   airlineCode: String,
//   pnr: String,
//   bookingStatus: String,
//   adminRemark: String,
//   generalRemark: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("FlightAmendment", flightAmendmentSchema);

const mongoose = require("mongoose");

const flightAmendmentSchema = new mongoose.Schema({
  bookingRefNo: Number,
  bookingSource: String,
  amendmentId: String,
  amendmentType: String,
  amendmentStatus: String,
  journeyType: String,
  sector: String,
  departureDate: Date,
  airlineCode: String,
  pnr: String,
  bookingStatus: String,
  adminRemark: String,
  generalRemark: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("FlightAmendment", flightAmendmentSchema);
