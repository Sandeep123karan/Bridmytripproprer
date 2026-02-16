// const express = require('express');
// const router = express.Router();
// const {
//   getHolidayBookings,
//   createBooking,
//   deleteBooking
// } = require('../controllers/holidayBookingController');

// router.get("/", getHolidayBookings);
// router.post("/", createBooking);
// router.delete("/:refNo", deleteBooking);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getHolidayBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
  deleteBookingByRef
} = require("../controllers/holidayBookingController");

router.get("/", getHolidayBookings);
router.get("/:id", getBookingById);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);          // delete by id
router.delete("/ref/:refNo", deleteBookingByRef); // delete by reference number

module.exports = router;
