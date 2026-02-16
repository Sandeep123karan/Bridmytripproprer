const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking
} = require("../controllers/forexBookingController");

router.post("/forex-bookings", createBooking);
router.get("/forex-bookings", getBookings);
router.put("/forex-bookings/:id", updateBookingStatus);
router.delete("/forex-bookings/:id", deleteBooking);

module.exports = router;
