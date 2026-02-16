const OfflineFlight = require("../models/OfflineFlight");

exports.createOfflineFlight = async (req, res) => {
  try {
    const flight = await OfflineFlight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOfflineFlights = async (req, res) => {
  try {
    const flights = await OfflineFlight.find().sort({ createdAt: -1 });
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOfflineFlight = async (req, res) => {
  try {
    const flight = await OfflineFlight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOfflineFlight = async (req, res) => {
  try {
    await OfflineFlight.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
