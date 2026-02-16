const DocumentRequirement = require('../models/DocumentRequirement');

// Get all
exports.getAll = async (req, res) => {
  try {
    const docs = await DocumentRequirement.find();
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get one
exports.getOne = async (req, res) => {
  try {
    const doc = await DocumentRequirement.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create
exports.create = async (req, res) => {
  try {
    const doc = await DocumentRequirement.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const doc = await DocumentRequirement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete
exports.remove = async (req, res) => {
  try {
    const doc = await DocumentRequirement.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
