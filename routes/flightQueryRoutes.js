const express = require("express");
const router = express.Router();
const {
  getFlightQueries,
  deleteFlightQuery,
  exportFlightQueriesToExcel
} = require("../controllers/flightQueryController");

router.get("/", getFlightQueries);
router.delete("/:id", deleteFlightQuery);
router.get("/export/excel", exportFlightQueriesToExcel);

module.exports = router;