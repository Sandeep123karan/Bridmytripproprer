const HotelTicket = require("../models/HotelTicket");

exports.createHotelTicket = async (req, res) => {
  try {
    const ticket = await HotelTicket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHotelTickets = async (req, res) => {
  try {
    const tickets = await HotelTicket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHotelTicket = async (req, res) => {
  try {
    const updated = await HotelTicket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHotelTicket = async (req, res) => {
  try {
    await HotelTicket.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
