const AgentNotification = require('../models/agentNotificationModel');

// Get all with optional filters
const getNotifications = async (req, res) => {
  try {
    const { status, fromDate, toDate } = req.query;
    let query = {};
    if (status) query.status = status;
    if (fromDate && toDate) {
      query.createdAt = { $gte: new Date(fromDate), $lte: new Date(toDate) };
    }
    const list = await AgentNotification.find(query).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// Add new
const addNotification = async (req, res) => {
  try {
    const created = await AgentNotification.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: "Add failed", error: err.message });
  }
};

// Update notification
const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await AgentNotification.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// Delete notification
const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    await AgentNotification.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

// Bulk status update
const changeStatus = async (req, res) => {
  try {
    const { ids, status } = req.body;
    await AgentNotification.updateMany({ _id: { $in: ids } }, { $set: { status } });
    res.json({ message: "Status updated" });
  } catch (err) {
    res.status(400).json({ message: "Status change failed", error: err.message });
  }
};

module.exports = {
  getNotifications,
  addNotification,
  updateNotification,
  deleteNotification,
  changeStatus,
};
