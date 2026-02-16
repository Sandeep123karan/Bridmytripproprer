// const mongoose = require("mongoose");

// const holidayAmendmentSchema = new mongoose.Schema(
//   {
//     referenceNumber: String,
//     amendmentId: String,
//     amendmentType: String,
//     amendmentStatus: String,
//     package: String,
//     type: String,
//     travelDate: String,
//     bookingStatus: String,
//     adminRemark: String,
//     generateBy: String,
//     bookingSource: String,
//     adminStaff: String,
//     created: String,
//     summary: String,
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("HolidayAmendment", holidayAmendmentSchema);
const mongoose = require("mongoose");

const holidayAmendmentSchema = new mongoose.Schema(
  {
    referenceNumber: String,
    amendmentId: String,
    amendmentType: String,
    amendmentStatus: String,
    package: String,
    type: String,
    travelDate: String,
    bookingStatus: String,
    adminRemark: String,
    generateBy: String,
    bookingSource: String,
    adminStaff: String,
    created: String,
    summary: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("HolidayAmendment", holidayAmendmentSchema);
