const express = require("express");
const router = express.Router();

const {
  createBusBooking,
  getAllBusBookings,
  getBusBookingById,
  updateBusBooking,
  deleteBusBooking,
} = require("../controllers/busBookingController");

// ✅ Create new booking
router.post("/", createBusBooking);

// ✅ Get all bookings
router.get("/", getAllBusBookings);

// ✅ Get single booking by ID
router.get("/:id", getBusBookingById);

// ✅ Update booking by ID
router.put("/:id", updateBusBooking);

// ✅ Delete booking by ID
router.delete("/:id", deleteBusBooking);

module.exports = router;
