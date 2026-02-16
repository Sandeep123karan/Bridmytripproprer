const TrainAmendment = require("../models/TrainAmendment");

// ===============================
// CREATE
// ===============================
exports.createAmendment = async (req, res) => {
  try {
    const data = await TrainAmendment.create(req.body);
    res.status(201).json({ message: "Created successfully", data });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// ===============================
// GET ALL + Search + Pagination
// ===============================
exports.getAmendments = async (req, res) => {
  try {
    let { page = 1, limit = 10, q = "" } = req.query;

    page = Number(page);
    limit = Number(limit);

    const query = {
      $or: [
        { passengerName: { $regex: q, $options: "i" } },
        { trainNo: { $regex: q, $options: "i" } },
        { oldInfo: { $regex: q, $options: "i" } },
        { newInfo: { $regex: q, $options: "i" } },
      ],
    };

    const total = await TrainAmendment.countDocuments(query);
    const items = await TrainAmendment.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: "Failed to load", error: err.message });
  }
};

// ===============================
// UPDATE
// ===============================
exports.updateAmendment = async (req, res) => {
  try {
    const updated = await TrainAmendment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Updated successfully", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Failed to update", error: err.message });
  }
};

// ===============================
// DELETE
// ===============================
exports.deleteAmendment = async (req, res) => {
  try {
    const deleted = await TrainAmendment.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete", error: err.message });
  }
};
