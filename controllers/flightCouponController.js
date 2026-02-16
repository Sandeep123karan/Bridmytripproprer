const FlightCoupon = require("../models/FlightCoupon");

exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await FlightCoupon.find().sort({ createdAt: -1 });
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch coupons" });
  }
};

exports.addCoupon = async (req, res) => {
  try {
    const newCoupon = new FlightCoupon(req.body);
    await newCoupon.save();
    res.status(201).json({ message: "Coupon added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add coupon" });
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    await FlightCoupon.findByIdAndDelete(req.params.id);
    res.json({ message: "Coupon deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete coupon" });
  }
};
