// const express = require("express");
// const router = express.Router();
// const {
//   getHotelBookings,
//   addHotelBooking
// } = require("../controllers/hotelBookingController");

// router.get("/", getHotelBookings);
// router.post("/", addHotelBooking);

// module.exports = router;


const express = require("express");
const router = express.Router();
const {
  getHotelBookings,
  addHotelBooking,
  updateHotelBooking,
  deleteHotelBooking,
} = require("../controllers/hotelBookingController");

router.get("/", getHotelBookings);
router.post("/", addHotelBooking);
router.put("/:id", updateHotelBooking);
router.delete("/:id", deleteHotelBooking);

module.exports = router;
