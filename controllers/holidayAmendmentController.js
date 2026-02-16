// const HolidayAmendment = require("../models/holidayAmendmentModel");

// exports.getHolidayAmendments = async (req, res) => {
//   const data = await HolidayAmendment.find().sort({ createdAt: -1 });
//   res.json(data);
// };

// exports.addHolidayAmendment = async (req, res) => {
//   const item = new HolidayAmendment(req.body);
//   await item.save();
//   res.status(201).json(item);
// };

// exports.updateHolidayAmendment = async (req, res) => {
//   const updated = await HolidayAmendment.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// };

// exports.deleteHolidayAmendment = async (req, res) => {
//   await HolidayAmendment.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };
const HolidayAmendment = require("../models/holidayAmendmentModel");

// GET ALL
exports.getHolidayAmendments = async (req, res) => {
  try {
    const data = await HolidayAmendment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch amendments", error: err.message });
  }
};

// CREATE
exports.addHolidayAmendment = async (req, res) => {
  try {
    const item = new HolidayAmendment(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Failed to create amendment", error: err.message });
  }
};

// UPDATE
exports.updateHolidayAmendment = async (req, res) => {
  try {
    const updated = await HolidayAmendment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Amendment not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: "Failed to update amendment", error: err.message });
  }
};

// DELETE
exports.deleteHolidayAmendment = async (req, res) => {
  try {
    await HolidayAmendment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete amendment", error: err.message });
  }
};
