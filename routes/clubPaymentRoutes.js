const express = require("express");
const router = express.Router();
const { getPayments, addPayment, updatePayment, deletePayment } = require("../controllers/clubPaymentController");

router.get("/", getPayments);
router.post("/", addPayment);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
