const VisaDiscount = require("../models/VisaDiscount");

// CREATE
exports.createDiscount = async (req, res) => {
  try {
    const disc = await VisaDiscount.create(req.body);
    res.status(201).json(disc);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// READ ALL
exports.getDiscounts = async (req, res) => {
  try {
    const list = await VisaDiscount.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// READ SINGLE
exports.getDiscount = async (req, res) => {
  try {
    const disc = await VisaDiscount.findById(req.params.id);
    if (!disc) return res.status(404).json({ message: "Not found" });
    res.json(disc);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE
exports.updateDiscount = async (req, res) => {
  try {
    const disc = await VisaDiscount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!disc) return res.status(404).json({ message: "Not found" });
    res.json(disc);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE
exports.deleteDiscount = async (req, res) => {
  try {
    const disc = await VisaDiscount.findByIdAndDelete(req.params.id);
    if (!disc) return res.status(404).json({ message: "Not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
