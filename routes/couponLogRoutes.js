const express = require("express");
const router = express.Router();
const controller = require("../controllers/couponLogController");

router.get("/coupon-logs", controller.getCouponLogs);
router.post("/coupon-log", controller.addCouponLog);
router.delete("/coupon-log/:id", controller.deleteCouponLog);

module.exports = router;
