// const ClubBooking = require("../models/ClubBooking");

// exports.getBookings = async (req, res) => {
//   try {
//     const bookings = await ClubBooking.find().populate("memberId eventId");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.addBooking = async (req, res) => {
//   try {
//     const booking = new ClubBooking(req.body);
//     await booking.save();
//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.updateBooking = async (req, res) => {
//   try {
//     const updated = await ClubBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.deleteBooking = async (req, res) => {
//   try {
//     await ClubBooking.findByIdAndDelete(req.params.id);
//     res.json({ message: "Booking deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
const ClubBooking = require("../models/ClubBooking");

exports.getBookings = async (req, res) => {
  try {
    const bookings = await ClubBooking.find()
      .populate("memberId")
      .populate("eventId");

    res.json(bookings);
  } catch (err) {
    console.error("Booking Fetch Error:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.addBooking = async (req, res) => {
  try {
    const booking = new ClubBooking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error("Booking Add Error:", err);
    res.status(400).json({ message: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const updated = await ClubBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error("Booking Update Error:", err);
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    await ClubBooking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("Booking Delete Error:", err);
    res.status(500).json({ message: err.message });
  }
};
