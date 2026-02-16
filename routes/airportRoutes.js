const express = require("express");
const router = express.Router();
const airportController = require("../controllers/airportController");

router.get("/", airportController.getAllAirports);
router.get("/seed", airportController.seedAirports);

module.exports = router;
