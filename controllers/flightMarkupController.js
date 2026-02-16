// const FlightMarkup = require('../models/flightMarkupModel'); // ✅ CORRECT PATH

// exports.createMarkup = async (req, res) => {
//   try {
//     const newMarkup = await FlightMarkup.create(req.body);
//     res.status(201).json(newMarkup);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getAllMarkups = async (req, res) => {
//   try {
//     const allMarkups = await FlightMarkup.find();
//     res.json(allMarkups);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
const FlightMarkup = require("../models/flightMarkupModel");

// CREATE
exports.createMarkup = async (req, res) => {
  try {
    const newMarkup = await FlightMarkup.create(req.body);
    res.status(201).json(newMarkup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL
exports.getAllMarkups = async (req, res) => {
  try {
    const allMarkups = await FlightMarkup.find().sort({ createdAt: -1 });
    res.json(allMarkups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateMarkup = async (req, res) => {
  try {
    const updated = await FlightMarkup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteMarkup = async (req, res) => {
  try {
    await FlightMarkup.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const markup = await FlightMarkup.findById(req.params.id);
    markup.status = markup.status === "Active" ? "Inactive" : "Active";
    await markup.save();
    res.json(markup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
