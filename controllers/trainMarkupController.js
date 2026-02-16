const TrainMarkup = require("../models/TrainMarkup");

// ========================================
// CREATE
// ========================================
exports.createMarkup = async (req, res) => {
  try {
    const data = await TrainMarkup.create(req.body);
    res.status(201).json({ message: "Markup created", data });
  } catch (err) {
    res.status(500).json({ message: "Error creating", error: err.message });
  }
};

// ========================================
// GET ALL + Search + Pagination
// ========================================
exports.getMarkups = async (req, res) => {
  try {
    let { page = 1, limit = 10, q = "" } = req.query;
    page = Number(page);
    limit = Number(limit);

    const query = {
      $or: [
        { trainNo: { $regex: q, $options: "i" } },
        { trainName: { $regex: q, $options: "i" } },
        { classType: { $regex: q, $options: "i" } },
      ],
    };

    const total = await TrainMarkup.countDocuments(query);

    const items = await TrainMarkup.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch", error: err.message });
  }
};

// ========================================
// UPDATE
// ========================================
exports.updateMarkup = async (req, res) => {
  try {
    const updated = await TrainMarkup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Markup not found" });

    res.json({ message: "Updated successfully", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// ========================================
// DELETE
// ========================================
exports.deleteMarkup = async (req, res) => {
  try {
    const deleted = await TrainMarkup.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
