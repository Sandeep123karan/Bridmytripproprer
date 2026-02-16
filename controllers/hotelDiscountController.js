const HotelDiscount = require("../models/hotelDiscountModel");

exports.createHotelDiscount = async (req, res) => {
  try {
    const discount = await HotelDiscount.create(req.body);
    res.status(201).json(discount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHotelDiscounts = async (req, res) => {
  try {
    const discounts = await HotelDiscount.find();
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHotelDiscount = async (req, res) => {
  try {
    const updated = await HotelDiscount.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteHotelDiscount = async (req, res) => {
  try {
    await HotelDiscount.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
