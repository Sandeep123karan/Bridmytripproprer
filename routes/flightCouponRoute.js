const express = require("express");
const router = express.Router();
const {
  getAllCoupons,
  addCoupon,
  deleteCoupon
} = require("../controllers/flightCouponController");

router.get("/", getAllCoupons);
router.post("/add", addCoupon);
router.delete("/:id", deleteCoupon);

module.exports = router;

