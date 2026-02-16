const CruiseBooking = require("../models/CruiseBooking");

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await CruiseBooking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a booking
exports.addBooking = async (req, res) => {
  try {
    const booking = new CruiseBooking({
      customerName: req.body.customerName,
      cruiseName: req.body.cruiseName,
      seats: req.body.seats,
      status: req.body.status || "Pending",
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update booking
exports.updateBooking = async (req, res) => {
  try {
    const updated = await CruiseBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    await CruiseBooking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
