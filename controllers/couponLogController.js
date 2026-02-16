const CouponLog = require("../models/CouponLog");

// Get all coupon logs
exports.getCouponLogs = async (req, res) => {
  try {
    const logs = await CouponLog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add new coupon log (for testing or manual add)
exports.addCouponLog = async (req, res) => {
  try {
    const newLog = new CouponLog(req.body);
    await newLog.save();
    res.status(201).json({ message: "Coupon log added", log: newLog });
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

// Delete a log
exports.deleteCouponLog = async (req, res) => {
  try {
    await CouponLog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
