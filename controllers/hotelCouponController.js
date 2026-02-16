const HotelCoupon = require("../models/HotelCoupon");

exports.createCoupon = async (req, res) => {
  try {
    const newCoupon = await HotelCoupon.create(req.body);
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await HotelCoupon.find().sort({ createdAt: -1 });
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    await HotelCoupon.findByIdAndDelete(req.params.id);
    res.json({ message: "Coupon deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCouponStatus = async (req, res) => {
  try {
    const coupon = await HotelCoupon.findById(req.params.id);
    coupon.status = coupon.status === "Active" ? "Inactive" : "Active";
    await coupon.save();
    res.json(coupon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
