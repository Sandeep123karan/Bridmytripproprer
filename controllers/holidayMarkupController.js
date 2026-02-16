const HolidayMarkup = require('../models/holidayMarkupModel');

// GET All
exports.getAll = async (req, res) => {
  const data = await HolidayMarkup.find().sort({ createdAt: -1 });
  res.json(data);
};

// POST
exports.create = async (req, res) => {
  const newMarkup = new HolidayMarkup(req.body);
  await newMarkup.save();
  res.json(newMarkup);
};

// PUT
exports.update = async (req, res) => {
  const updated = await HolidayMarkup.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE
exports.delete = async (req, res) => {
  await HolidayMarkup.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  const entry = await HolidayMarkup.findById(req.params.id);
  entry.status = entry.status === 'Active' ? 'Inactive' : 'Active';
  await entry.save();
  res.json(entry);
};
