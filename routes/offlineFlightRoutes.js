const express = require("express");
const router = express.Router();
const {
  createOfflineFlight,
  getOfflineFlights,
  updateOfflineFlight,
  deleteOfflineFlight
} = require("../controllers/offlineFlightController");

router.post("/", createOfflineFlight);
router.get("/", getOfflineFlights);
router.put("/:id", updateOfflineFlight);
router.delete("/:id", deleteOfflineFlight);

module.exports = router;
