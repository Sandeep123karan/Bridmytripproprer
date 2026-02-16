const express = require("express");
const router = express.Router();
const { getPayments } = require("../controllers/agentPaymentController");

router.get("/", getPayments); // GET /api/agent-payments

module.exports = router;
