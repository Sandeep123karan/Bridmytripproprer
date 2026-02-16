const express = require("express");
const router = express.Router();
const { getBookings, addBooking, updateBooking, deleteBooking } = require("../controllers/clubBookingController");

router.get("/", getBookings);
router.post("/", addBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
