const HolidayCoupon = require("../models/holidayCouponModel");

exports.getAll = async (req, res) => {
  const coupons = await HolidayCoupon.find().sort({ createdAt: -1 });
  res.json(coupons);
};

exports.create = async (req, res) => {
  const coupon = new HolidayCoupon(req.body);
  await coupon.save();
  res.json(coupon);
};

exports.update = async (req, res) => {
  const updated = await HolidayCoupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await HolidayCoupon.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.toggleStatus = async (req, res) => {
  const coupon = await HolidayCoupon.findById(req.params.id);
  coupon.status = coupon.status === "Active" ? "Inactive" : "Active";
  await coupon.save();
  res.json(coupon);
};
