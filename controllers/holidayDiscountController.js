const HolidayDiscount = require('../models/holidayDiscountModel');

exports.getAll = async (req, res) => {
  const all = await HolidayDiscount.find().sort({ createdAt: -1 });
  res.json(all);
};

exports.create = async (req, res) => {
  const discount = new HolidayDiscount(req.body);
  await discount.save();
  res.json(discount);
};

exports.update = async (req, res) => {
  const updated = await HolidayDiscount.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await HolidayDiscount.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

exports.toggleStatus = async (req, res) => {
  const record = await HolidayDiscount.findById(req.params.id);
  record.status = record.status === 'Active' ? 'Inactive' : 'Active';
  await record.save();
  res.json(record);
};
