const HotelMarkup = require("../models/hotelMarkupModel");

// CREATE
exports.createHotelMarkup = async (req, res) => {
  try {
    const hotel = await HotelMarkup.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ
exports.getAllHotelMarkups = async (req, res) => {
  try {
    const markups = await HotelMarkup.find();
    res.json(markups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateHotelMarkup = async (req, res) => {
  try {
    const updated = await HotelMarkup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteHotelMarkup = async (req, res) => {
  try {
    await HotelMarkup.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
