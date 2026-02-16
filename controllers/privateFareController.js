const PrivateFare = require("../models/privateFareModel");

exports.createPrivateFare = async (req, res) => {
  try {
    const fare = new PrivateFare(req.body);
    await fare.save();
    res.status(201).json(fare);
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

exports.getPrivateFares = async (req, res) => {
  try {
    const { key, value, fromDate, toDate } = req.query;
    let filter = {};

    if (key && value) filter[key] = { $regex: value, $options: "i" };
    if (fromDate && toDate) {
      filter.fromDate = { $gte: new Date(fromDate) };
      filter.toDate = { $lte: new Date(toDate) };
    }

    const fares = await PrivateFare.find(filter).sort({ createdAt: -1 });
    res.json(fares);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

exports.updatePrivateFare = async (req, res) => {
  try {
    const updated = await PrivateFare.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

exports.deletePrivateFare = async (req, res) => {
  try {
    await PrivateFare.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};