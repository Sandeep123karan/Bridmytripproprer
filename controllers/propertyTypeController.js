const PropertyType = require("../models/PropertyType");

// GET all property types
exports.getAll = async (req, res) => {
  try {
    const data = await PropertyType.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST: Add new
exports.create = async (req, res) => {
  try {
    const { name, status, suppliers } = req.body;
    const newType = new PropertyType({ name, status, suppliers });
    await newType.save();
    res.status(201).json(newType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT: Update
exports.update = async (req, res) => {
  try {
    const updated = await PropertyType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await PropertyType.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH: Change status
exports.changeStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await PropertyType.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
