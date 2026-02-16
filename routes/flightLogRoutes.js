const express = require("express");
const router = express.Router();
const {
  getFlightLogs,
  addFlightLog,
  updateFlightLog,
  deleteFlightLog
} = require("../controllers/flightLogController");

router.get("/", getFlightLogs);
router.post("/add", addFlightLog);                // ✅ POST
router.put("/update/:id", updateFlightLog);       // ✅ PUT
router.delete("/delete/:id", deleteFlightLog);    // ✅ DELETE

module.exports = router;
