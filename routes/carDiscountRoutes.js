const express = require("express");
const router = express.Router();
const {
  createDiscount,
  getDiscounts,
  updateDiscount,
  deleteDiscount,
  toggleStatus,
} = require("../controllers/carDiscountController");

router.get("/", getDiscounts);
router.post("/", createDiscount);
router.put("/:id", updateDiscount);
router.delete("/:id", deleteDiscount);
router.patch("/toggle-status/:id", toggleStatus);

module.exports = router;
