const CarMarkup = require("../models/CarMarkup");

exports.addCarMarkup = async (req, res) => {
  try {
    const carMarkup = new CarMarkup(req.body);
    await carMarkup.save();
    res.status(201).json(carMarkup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCarMarkups = async (req, res) => {
  try {
    const data = await CarMarkup.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCarMarkup = async (req, res) => {
  try {
    const updated = await CarMarkup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCarMarkup = async (req, res) => {
  try {
    await CarMarkup.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
