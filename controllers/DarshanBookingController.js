// const Booking = require("../models/BookingModel");

// // Get all bookings
// exports.getAllDarshanBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("slot");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create booking
// exports.createDarshanBooking = async (req, res) => {
//   try {
//     const { customerName, customerEmail, slot, status } = req.body;
//     const booking = new Booking({ customerName, customerEmail, slot, status });
//     await booking.save();
//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update booking
// exports.updateDarshanBooking = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(booking);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete booking
// exports.deleteDarshanBooking = async (req, res) => {
//   try {
//     await Booking.findByIdAndDelete(req.params.id);
//     res.json({ message: "Darshan booking deleted" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
