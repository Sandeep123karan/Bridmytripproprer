const Page = require("../models/Page");

// Get all pages
exports.getPages = async (req, res) => {
  try {
    const pages = await Page.find().sort({ createdAt: -1 });
    res.json(pages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new page
exports.addPage = async (req, res) => {
  try {
    const { title, slug, status } = req.body;
    const newPage = new Page({ title, slug, status });
    await newPage.save();
    res.status(201).json(newPage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update page
exports.updatePage = async (req, res) => {
  try {
    const updated = await Page.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete page
exports.deletePage = async (req, res) => {
  try {
    await Page.findByIdAndDelete(req.params.id);
    res.json({ message: "Page deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
