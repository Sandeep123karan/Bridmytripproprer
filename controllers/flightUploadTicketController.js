const FlightUploadTicket = require("../models/FlightUploadTicket");

// CREATE
exports.createTicket = async (req, res) => {
  try {
    const ticket = await FlightUploadTicket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
exports.getTickets = async (req, res) => {
  try {
    const data = await FlightUploadTicket.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateTicket = async (req, res) => {
  try {
    const updated = await FlightUploadTicket.findByIdAndUpdate(
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
exports.deleteTicket = async (req, res) => {
  try {
    await FlightUploadTicket.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
