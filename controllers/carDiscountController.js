const CarDiscount = require("../models/carDiscountModel");

// CREATE
exports.createDiscount = async (req, res) => {
  try {
    const data = await CarDiscount.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
exports.getDiscounts = async (req, res) => {
  try {
    const data = await CarDiscount.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateDiscount = async (req, res) => {
  try {
    const updated = await CarDiscount.findByIdAndUpdate(req.params.id, {
      ...req.body,
      updatedAt: new Date(),
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteDiscount = async (req, res) => {
  try {
    await CarDiscount.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CHANGE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const discount = await CarDiscount.findById(req.params.id);
    if (!discount) return res.status(404).json({ message: "Not found" });

    discount.status = !discount.status;
    discount.updatedAt = new Date();
    await discount.save();
    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
