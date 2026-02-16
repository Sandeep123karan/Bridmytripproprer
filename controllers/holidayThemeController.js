// const HolidayTheme = require('../models/holidayThemeModel');

// exports.getAll = async (req, res) => {
//   const { search } = req.query;
//   const query = search
//     ? { themeName: { $regex: search, $options: 'i' } }
//     : {};
//   const themes = await HolidayTheme.find(query).sort({ createdAt: -1 });
//   res.json(themes);
// };

// exports.create = async (req, res) => {
//   const file = req.file ? `/uploads/${req.file.filename}` : '';
//   const theme = new HolidayTheme({ ...req.body, themeImage: file });
//   await theme.save();
//   res.json(theme);
// };

// exports.update = async (req, res) => {
//   const updateData = req.body;
//   if (req.file) {
//     updateData.themeImage = `/uploads/${req.file.filename}`;
//   }
//   const updated = await HolidayTheme.findByIdAndUpdate(req.params.id, updateData, { new: true });
//   res.json(updated);
// };

// exports.delete = async (req, res) => {
//   await HolidayTheme.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };

// exports.toggleStatus = async (req, res) => {
//   const theme = await HolidayTheme.findById(req.params.id);
//   theme.status = theme.status === "Active" ? "Inactive" : "Active";
//   await theme.save();
//   res.json(theme);
// };
const HolidayTheme = require("../models/holidayThemeModel");

// GET ALL THEMES + SEARCH
exports.getAll = async (req, res) => {
  try {
    const { search } = req.query;
    const query = search
      ? { themeName: { $regex: search, $options: "i" } }
      : {};

    const themes = await HolidayTheme.find(query).sort({ createdAt: -1 });
    res.json(themes);

  } catch (err) {
    res.status(500).json({ message: "Error fetching themes", error: err.message });
  }
};

// CREATE THEME
exports.create = async (req, res) => {
  try {
    const imageUrl = req.file ? req.file.path : ""; // Cloudinary URL

    const theme = new HolidayTheme({
      ...req.body,
      themeImage: imageUrl
    });

    await theme.save();
    res.status(201).json(theme);

  } catch (err) {
    res.status(500).json({ message: "Error creating theme", error: err.message });
  }
};

// UPDATE THEME
exports.update = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.themeImage = req.file.path; // Cloudinary URL
    }

    const updated = await HolidayTheme.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: "Error updating theme", error: err.message });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await HolidayTheme.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting theme", error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const theme = await HolidayTheme.findById(req.params.id);

    if (!theme) return res.status(404).json({ message: "Theme not found" });

    theme.status = theme.status === "Active" ? "Inactive" : "Active";

    await theme.save();
    res.json(theme);

  } catch (err) {
    res.status(500).json({ message: "Error toggling status", error: err.message });
  }
};
