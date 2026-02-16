const express = require("express");
const router = express.Router();
const { createTransaction, getTransactions } = require("../controllers/onlineTransactionController");

router.post("/", createTransaction);
router.get("/", getTransactions);

module.exports = router;
