const express = require("express");
const router = express.Router();
const airlineController = require("../controllers/airlineController");

router.get("/", airlineController.getAllAirlines);        // /api/airlines
router.get("/seed", airlineController.seedAirlines);      // /api/airlines/seed

module.exports = router;
