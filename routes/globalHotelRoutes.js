const express = require("express");
const router = express.Router();
const { fetchGlobalHotels } = require("../controllers/globalHotelController");

router.get("/", fetchGlobalHotels);

module.exports = router;
