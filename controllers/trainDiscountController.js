const TrainDiscount = require("../models/TrainDiscount");

// CREATE
exports.createDiscount = async (req, res) => {
  try {
    const d = await TrainDiscount.create(req.body);
    res.status(201).json(d);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// GET ALL (with pagination & search)
exports.getDiscounts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const q = req.query.q || "";

    const filter = q
      ? {
          $or: [
            { trainNo: { $regex: q, $options: "i" } },
            { trainName: { $regex: q, $options: "i" } },
            { classType: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const total = await TrainDiscount.countDocuments(filter);

    const items = await TrainDiscount.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({ items, total });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// UPDATE
exports.updateDiscount = async (req, res) => {
  try {
    const updated = await TrainDiscount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// DELETE
exports.deleteDiscount = async (req, res) => {
  try {
    const deleted = await TrainDiscount.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
