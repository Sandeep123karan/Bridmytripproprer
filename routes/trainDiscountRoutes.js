const express = require("express");
const {
  createDiscount,
  getDiscounts,
  updateDiscount,
  deleteDiscount,
} = require("../controllers/trainDiscountController");

const router = express.Router();

router.post("/", createDiscount);
router.get("/", getDiscounts);
router.put("/:id", updateDiscount);
router.delete("/:id", deleteDiscount);

module.exports = router;
