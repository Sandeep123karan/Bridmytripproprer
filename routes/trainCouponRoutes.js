const express = require("express");
const {
  createCoupon,
  getCoupons,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/trainCouponController");

const router = express.Router();

router.post("/", createCoupon);
router.get("/", getCoupons);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

module.exports = router;
