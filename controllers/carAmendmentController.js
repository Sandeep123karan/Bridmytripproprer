const CarAmendment = require("../models/CarAmendment");

exports.createCarAmendment = async (req, res) => {
  try {
    const data = await CarAmendment.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCarAmendments = async (req, res) => {
  try {
    const data = await CarAmendment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCarAmendment = async (req, res) => {
  try {
    const updated = await CarAmendment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCarAmendment = async (req, res) => {
  try {
    await CarAmendment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
