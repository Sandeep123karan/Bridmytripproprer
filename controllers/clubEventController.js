const ClubEvent = require("../models/ClubEvent");

// exports.getEvents = async (req, res) => {
//   try {
//     const events = await ClubEvent.find();
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
exports.getEvents = async (req, res) => {
  try {
    let events = await ClubEvent.find();

    // Add price & status for old events that don't have them
    events = events.map(ev => ({
      ...ev._doc,
      price: ev.price !== undefined ? ev.price : 0,
      status: ev.status || "Upcoming"
    }));

    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.addEvent = async (req, res) => {
  try {
    const event = new ClubEvent(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updated = await ClubEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await ClubEvent.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
