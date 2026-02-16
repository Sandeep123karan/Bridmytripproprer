const CarCoupon = require("../models/carCouponModel");

// Create
exports.createCoupon = async (req, res) => {
  try {
    const coupon = await CarCoupon.create(req.body);
    res.status(201).json(coupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All
exports.getCoupons = async (req, res) => {
  try {
    const coupons = await CarCoupon.find().sort({ createdAt: -1 });
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateCoupon = async (req, res) => {
  try {
    const updated = await CarCoupon.findByIdAndUpdate(req.params.id, {
      ...req.body,
      updatedAt: new Date(),
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deleteCoupon = async (req, res) => {
  try {
    await CarCoupon.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle status
exports.toggleStatus = async (req, res) => {
  try {
    const coupon = await CarCoupon.findById(req.params.id);
    if (!coupon) return res.status(404).json({ message: "Not found" });
    coupon.status = !coupon.status;
    coupon.updatedAt = new Date();
    await coupon.save();
    res.json(coupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
