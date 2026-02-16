const FlightReplaceRule = require('../models/FlightReplaceRule');

exports.getAll = async (req, res) => {
  try {
    const rules = await FlightReplaceRule.find().sort({ createdAt: -1 });
    res.json(rules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const rule = new FlightReplaceRule(req.body);
    await rule.save();
    res.status(201).json(rule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const rule = await FlightReplaceRule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(rule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await FlightReplaceRule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.toggleStatus = async (req, res) => {
  try {
    const rule = await FlightReplaceRule.findById(req.params.id);
    rule.status = rule.status === 'Active' ? 'Inactive' : 'Active';
    await rule.save();
    res.json(rule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
