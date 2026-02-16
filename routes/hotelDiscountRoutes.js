const express = require("express");
const router = express.Router();
const {
  createHotelDiscount,
  getHotelDiscounts,
  updateHotelDiscount,
  deleteHotelDiscount
} = require("../controllers/hotelDiscountController");

router.post("/", createHotelDiscount);
router.get("/", getHotelDiscounts);
router.put("/:id", updateHotelDiscount);
router.delete("/:id", deleteHotelDiscount);

module.exports = router;
