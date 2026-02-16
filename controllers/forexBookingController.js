// const ForexBooking = require("../models/ForexBooking.js");

// // ==========================================
// // ✅ Create new Forex Booking
// // ==========================================
// const createBooking = async (req, res) => {
//   try {
//     const { bookingId, userName, userEmail, currency, amount, status } = req.body;

//     const newBooking = new ForexBooking({
//       bookingId,
//       userName,
//       userEmail,
//       currency,
//       amount,
//       status: status || "Pending"  // default status
//     });

//     await newBooking.save();

//     res.status(201).json({
//       message: "Booking created successfully",
//       booking: newBooking,
//     });
//   } catch (error) {
//     console.error("❌ Error creating booking:", error.message);

//     res.status(500).json({
//       message: "Error creating booking",
//       error: error.message,
//     });
//   }
// };

// // ==========================================
// // ✅ Get all bookings
// // ==========================================
// const getBookings = async (req, res) => {
//   try {
//     const bookings = await ForexBooking.find().sort({ createdAt: -1 });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error("❌ Error fetching bookings:", error.message);

//     res.status(500).json({
//       message: "Error fetching bookings",
//       error: error.message,
//     });
//   }
// };

// // ==========================================
// // ✅ Update booking status
// // ==========================================
// const updateBookingStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     const booking = await ForexBooking.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.status(200).json({
//       message: "Booking updated successfully",
//       booking,
//     });
//   } catch (error) {
//     console.error("❌ Error updating booking:", error.message);

//     res.status(500).json({
//       message: "Error updating booking",
//       error: error.message,
//     });
//   }
// };

// // ==========================================
// // ✅ Delete booking
// // ==========================================
// const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const booking = await ForexBooking.findByIdAndDelete(id);

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.status(200).json({
//       message: "Booking deleted successfully",
//     });
//   } catch (error) {
//     console.error("❌ Error deleting booking:", error.message);

//     res.status(500).json({
//       message: "Error deleting booking",
//       error: error.message,
//     });
//   }
// };

// // ==========================================
// // Exporting all Controller Functions
// // ==========================================
// module.exports = {
//   createBooking,
//   getBookings,
//   updateBookingStatus,
//   deleteBooking,
// };
const ForexBooking = require("../models/ForexBooking");

// CREATE
exports.createBooking = async (req, res) => {
  try {
    const booking = await ForexBooking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getBookings = async (req, res) => {
  try {
    const list = await ForexBooking.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE (FULL)
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await ForexBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteBooking = async (req, res) => {
  try {
    const removed = await ForexBooking.findByIdAndDelete(req.params.id);

    if (!removed) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
