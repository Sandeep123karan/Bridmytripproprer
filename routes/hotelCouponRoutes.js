const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getCoupons,
  deleteCoupon,
  updateCouponStatus
} = require("../controllers/hotelCouponController");

router.post("/", createCoupon);
router.get("/", getCoupons);
router.delete("/:id", deleteCoupon);
router.put("/status/:id", updateCouponStatus);

module.exports = router;
