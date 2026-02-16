const VisaSettings = require("../models/VisaSettings");

// GET: return the single settings document (or create default if none)
exports.getSettings = async (req, res) => {
  try {
    let settings = await VisaSettings.findOne();
    if (!settings) {
      settings = await VisaSettings.create({});
    }
    res.json(settings);
  } catch (err) {
    console.error("Error fetching visa settings:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// CREATE: create settings (if you want explicit creation)
exports.createSettings = async (req, res) => {
  try {
    // optional: prevent multiple docs by checking existing
    const existing = await VisaSettings.findOne();
    if (existing) {
      return res.status(400).json({ message: "Settings already exist. Use PUT to update." });
    }
    const s = await VisaSettings.create(req.body);
    res.status(201).json(s);
  } catch (err) {
    console.error("Error creating visa settings:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// UPDATE: update existing settings (upsert behavior optional)
exports.updateSettings = async (req, res) => {
  try {
    // Find the single doc and update
    const updated = await VisaSettings.findOneAndUpdate(
      {},               // find any document
      { $set: req.body },
      { new: true, upsert: true } // create if not exists
    );
    res.json(updated);
  } catch (err) {
    console.error("Error updating visa settings:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE: delete the settings (useful for reset in dev)
exports.deleteSettings = async (req, res) => {
  try {
    const doc = await VisaSettings.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json({ success: true });
  } catch (err) {
    console.error("Error deleting visa settings:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
