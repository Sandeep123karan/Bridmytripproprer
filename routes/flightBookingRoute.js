// const express = require("express");
// const router = express.Router();
// const { getBookingsByDate } = require("../controllers/flightBookingController");

// router.get("/by-date", getBookingsByDate);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingsByDate,
  updateBooking,
  deleteBooking
} = require("../controllers/flightBookingController");

// CRUD
router.get("/", getBookings);
router.post("/", createBooking);
router.get("/by-date", getBookingsByDate);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
