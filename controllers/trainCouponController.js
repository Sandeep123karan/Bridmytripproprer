const TrainCoupon = require("../models/TrainCoupon");

// CREATE
exports.createCoupon = async (req, res) => {
  try {
    const coupon = await TrainCoupon.create(req.body);
    res.status(201).json(coupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL (with search & pagination)
exports.getCoupons = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const q = req.query.q || "";

    const filter = q
      ? {
          $or: [
            { code: { $regex: q, $options: "i" } },
            { discountType: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const total = await TrainCoupon.countDocuments(filter);

    const items = await TrainCoupon.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateCoupon = async (req, res) => {
  try {
    const updated = await TrainCoupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteCoupon = async (req, res) => {
  try {
    const deleted = await TrainCoupon.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
