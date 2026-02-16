const ManageFareRule = require("../models/manageFareRuleModel");

exports.createRule = async (req, res) => {
  try {
    const rule = await ManageFareRule.create(req.body);
    res.status(201).json(rule);
  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

exports.getAllRules = async (req, res) => {
  try {
    const rules = await ManageFareRule.find()
      .populate("supplier", "name") // only populate name of supplier
      .sort({ createdAt: -1 });
    res.json(rules);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

exports.updateRule = async (req, res) => {
  try {
    const updated = await ManageFareRule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

exports.deleteRule = async (req, res) => {
  try {
    await ManageFareRule.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
