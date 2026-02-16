// const BusBooking = require("../models/BusBooking");

// // ✅ Create booking
// exports.createBusBooking = async (req, res) => {
//   try {
//     const booking = new BusBooking(req.body);
//     await booking.save();
//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ Get all bookings
// exports.getAllBusBookings = async (req, res) => {
//   try {
//     const bookings = await BusBooking.find().populate("route");
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Get booking by ID
// exports.getBusBookingById = async (req, res) => {
//   try {
//     const booking = await BusBooking.findById(req.params.id).populate("route");
//     if (!booking) return res.status(404).json({ message: "Not found" });
//     res.json(booking);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Update booking
// exports.updateBusBooking = async (req, res) => {
//   try {
//     const booking = await BusBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(booking);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // ✅ Delete booking
// exports.deleteBusBooking = async (req, res) => {
//   try {
//     await BusBooking.findByIdAndDelete(req.params.id);
//     res.json({ message: "Booking deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
const BusBooking = require("../models/BusBooking");

// CREATE
exports.createBusBooking = async (req, res) => {
  try {
    const booking = await BusBooking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL
exports.getAllBusBookings = async (req, res) => {
  try {
    const bookings = await BusBooking.find().populate("route");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
exports.getBusBookingById = async (req, res) => {
  try {
    const booking = await BusBooking.findById(req.params.id).populate("route");
    if (!booking) return res.status(404).json({ message: "Not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.updateBusBooking = async (req, res) => {
  try {
    const booking = await BusBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteBusBooking = async (req, res) => {
  try {
    await BusBooking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
