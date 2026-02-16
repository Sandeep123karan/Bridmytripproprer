// const mongoose = require('mongoose');

// const visaApplicationSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     passportNumber: { type: String, required: true },
//     nationality: { type: String, required: true },
//     visaType: { type: String, required: true },
//     stayDuration: { type: String },
//     submissionDate: { type: Date, default: Date.now },
//     status: { type: String, default: 'Pending' },
// });

// module.exports = mongoose.model('VisaApplication', visaApplicationSchema);

// const mongoose = require('mongoose');

// const visaApplicationSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   passportNumber: { type: String, required: true },
//   nationality: { type: String, required: true },
//   visaType: { type: String, required: true },
//   stayDuration: { type: String },
//   submissionDate: { type: Date, default: Date.now },
//   status: { type: String, default: 'Pending' },
// }, { timestamps: true });

// module.exports = mongoose.model('VisaApplication', visaApplicationSchema);

const mongoose = require("mongoose");

const visaApplicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    passportNumber: { type: String, required: true },
    nationality: { type: String, required: true },
    visaType: { type: String, required: true },
    stayDuration: { type: String },
    submissionDate: { type: Date, default: Date.now },
    status: { type: String, default: "Pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("VisaApplication", visaApplicationSchema);
