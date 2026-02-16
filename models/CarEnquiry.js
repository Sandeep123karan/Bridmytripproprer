// const mongoose = require('mongoose');

// const carEnquirySchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   mobile: String,
//   carName: String,
// }, { timestamps: true });

// module.exports = mongoose.model('CarEnquiry', carEnquirySchema);
const mongoose = require('mongoose');

const carEnquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  carName: String
}, { timestamps: true });

module.exports = mongoose.model('CarEnquiry', carEnquirySchema);
