const express = require("express");
const {
  getExchangeRates,
  createExchangeRate,
  updateExchangeRate,
  deleteExchangeRate,
} = require("../controllers/exchangeRateController");

const router = express.Router();

router.get("/", getExchangeRates);
router.post("/", createExchangeRate);
router.put("/:id", updateExchangeRate);
router.delete("/:id", deleteExchangeRate);

module.exports = router;
