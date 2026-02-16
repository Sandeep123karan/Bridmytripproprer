const express = require("express");
const router = express.Router();
const {
  getFlightApiSuppliers,
  addFlightApiSupplier,
} = require("../controllers/flightApiSupplierController");

router.get("/", getFlightApiSuppliers);
router.post("/", addFlightApiSupplier);

module.exports = router;
