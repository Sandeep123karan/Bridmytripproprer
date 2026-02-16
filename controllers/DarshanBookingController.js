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











const Booking = require("../models/DarshanBooking");
const Darshan = require("../models/Darshan");

// CREATE BOOKING
exports.createDarshanBooking = async (req, res) => {
  try {
    const { darshanId, userName, email, phone, persons } = req.body;

    const darshan = await Darshan.findById(darshanId);
    if (!darshan) {
      return res.status(404).json({ message: "Darshan not found" });
    }

    if (darshan.availableSeats < persons) {
      return res.status(400).json({ message: "Seats not available" });
    }

    const totalPrice = darshan.price * persons;

    const booking = new Booking({
      darshanId,
      userName,
      email,
      phone,
      persons,
      totalPrice,
    });

    await booking.save();

    // seats minus
    darshan.availableSeats -= persons;
    await darshan.save();

    res.json({
      success: true,
      message: "Darshan booking successful",
      booking,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET ALL BOOKINGS (ADMIN)
exports.getDarshanBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("darshanId")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// 🟢 GET SINGLE
exports.getSingleBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("darshanId");
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟢 UPDATE BOOKING
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🟢 DELETE BOOKING
exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


