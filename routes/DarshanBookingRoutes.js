
const express = require("express");
const router = express.Router();
const controller = require("../controllers/darshanBookingController");

// CREATE booking
router.post("/", controller.createDarshanBooking);

// GET all bookings (admin)
router.get("/", controller.getDarshanBookings);

// GET single booking
router.get("/:id", controller.getSingleBooking);

// UPDATE booking
router.put("/:id", controller.updateBooking);

// DELETE booking
router.delete("/:id", controller.deleteBooking);

module.exports = router;

