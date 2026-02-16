const express = require("express");
const router = express.Router();
const {
  createCoupon,
  getCoupons,
  updateCoupon,
  deleteCoupon,
  toggleStatus,
} = require("../controllers/carCouponController");

router.get("/", getCoupons);
router.post("/", createCoupon);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);
router.patch("/toggle-status/:id", toggleStatus);

module.exports = router;
