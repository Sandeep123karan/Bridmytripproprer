const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    totalUsers: 120,
    totalFlights: 18,
    totalHotels: 9,
    bookings: 50,
    revenue: 50000,
  });
}); 

module.exports = router;