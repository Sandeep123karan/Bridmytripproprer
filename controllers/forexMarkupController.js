const ForexMarkup = require("../models/forexMarkupModel");

// CREATE
const createForexMarkup = async (req, res) => {
  try {
    const markup = new ForexMarkup(req.body);
    await markup.save();
    res.status(201).json(markup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
const getForexMarkups = async (req, res) => {
  try {
    const markups = await ForexMarkup.find();
    res.json(markups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateForexMarkup = async (req, res) => {
  try {
    const updated = await ForexMarkup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
const deleteForexMarkup = async (req, res) => {
  try {
    await ForexMarkup.findByIdAndDelete(req.params.id);
    res.json({ message: "Forex markup deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createForexMarkup,
  getForexMarkups,
  updateForexMarkup,
  deleteForexMarkup
};
