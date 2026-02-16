const FareRule = require("../models/fareRuleModel");

exports.createFareRule = async (req, res) => {
  try {
    const fareRule = new FareRule(req.body);
    await fareRule.save();
    res.status(201).json(fareRule);
  } catch (error) {
    res.status(500).json({ message: "Failed to create fare rule" });
  }
};

exports.getFareRules = async (req, res) => {
  try {
    const data = await FareRule.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to get fare rules" });
  }
};

exports.updateFareRule = async (req, res) => {
  try {
    const updated = await FareRule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

exports.deleteFareRule = async (req, res) => {
  try {
    await FareRule.findByIdAndDelete(req.params.id);
    res.json({ message: "Fare rule deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};