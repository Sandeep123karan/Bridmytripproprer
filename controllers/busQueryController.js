const BusQuery = require("../models/BusQuery");

// Get all
exports.getAll = async (req, res) => {
  try {
    const data = await BusQuery.find().populate("route");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const data = await BusQuery.findById(req.params.id).populate("route");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
exports.create = async (req, res) => {
  try {
    const data = new BusQuery(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const data = await BusQuery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete
exports.remove = async (req, res) => {
  try {
    await BusQuery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
