const Darshan = require("../models/Darshan");

// ✅ Create Darshan
exports.createDarshan = async (req, res) => {
  try {
    const darshan = new Darshan(req.body);
    await darshan.save();
    res.status(201).json(darshan);
  } catch (err) {
    res.status(500).json({ message: "Error creating darshan", error: err.message });
  }
};

// ✅ Get All Darshans
exports.getDarshans = async (req, res) => {
  try {
    const darshans = await Darshan.find().sort({ createdAt: -1 });
    res.json(darshans);
  } catch (err) {
    res.status(500).json({ message: "Error fetching darshans", error: err.message });
  }
};

// ✅ Get Single Darshan by ID
exports.getDarshanById = async (req, res) => {
  try {
    const darshan = await Darshan.findById(req.params.id);
    if (!darshan) return res.status(404).json({ message: "Darshan not found" });
    res.json(darshan);
  } catch (err) {
    res.status(500).json({ message: "Error fetching darshan", error: err.message });
  }
};

// ✅ Update Darshan
exports.updateDarshan = async (req, res) => {
  try {
    const darshan = await Darshan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!darshan) return res.status(404).json({ message: "Darshan not found" });
    res.json(darshan);
  } catch (err) {
    res.status(500).json({ message: "Error updating darshan", error: err.message });
  }
};

// ✅ Delete Darshan
exports.deleteDarshan = async (req, res) => {
  try {
    const darshan = await Darshan.findByIdAndDelete(req.params.id);
    if (!darshan) return res.status(404).json({ message: "Darshan not found" });
    res.json({ message: "Darshan deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting darshan", error: err.message });
  }
};
