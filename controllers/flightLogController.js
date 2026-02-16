const FlightLog = require("../models/flightLogModel");

// ✅ GET logs with filter + pagination
exports.getFlightLogs = async (req, res) => {
  try {
    const { key, value, fromDate, toDate, page = 1, limit = 10 } = req.query;
    let query = {};

    if (key && value) query[key] = new RegExp(value, "i");
    if (fromDate && toDate) query.departDate = { $gte: fromDate, $lte: toDate };

    const logs = await FlightLog.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await FlightLog.countDocuments(query);

    res.json({ logs, total });
  } catch (err) {
    console.error("❌ Error fetching logs:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ POST: Add new log
exports.addFlightLog = async (req, res) => {
  try {
    const log = new FlightLog(req.body);
    await log.save();
    res.status(201).json({ message: "Flight Log Added Successfully", log });
  } catch (err) {
    console.error("❌ Add Log Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ PUT: Update existing log
exports.updateFlightLog = async (req, res) => {
  try {
    const updated = await FlightLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Log not found" });
    res.json({ message: "Flight Log Updated", log: updated });
  } catch (err) {
    console.error("❌ Update Log Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ DELETE: Remove a log
exports.deleteFlightLog = async (req, res) => {
  try {
    const deleted = await FlightLog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Log not found" });
    res.json({ message: "Flight Log Deleted" });
  } catch (err) {
    console.error("❌ Delete Log Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
