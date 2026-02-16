const express = require("express");
const {
  getAllDarshanBookings,
  createDarshanBooking,
  updateDarshanBooking,
  deleteDarshanBooking
} = require("../controllers/DarshanBookingController");

const router = express.Router();

router.get("/", getAllDarshanBookings);
router.post("/", createDarshanBooking);
router.put("/:id", updateDarshanBooking);
router.delete("/:id", deleteDarshanBooking);

module.exports = router;
