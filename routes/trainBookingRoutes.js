// routes/trainBookingRoutes.js
const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/trainBookingController");

router.post("/", createBooking);            // POST /api/train-bookings
router.get("/", getBookings);               // GET  /api/train-bookings
router.get("/:id", getBooking);             // GET  /api/train-bookings/:id
router.put("/:id", updateBooking);          // PUT  /api/train-bookings/:id
router.delete("/:id", deleteBooking);       // DELETE /api/train-bookings/:id

module.exports = router;
