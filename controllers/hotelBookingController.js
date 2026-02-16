// const HotelBooking = require("../models/hotelBookingModel");

// // GET all bookings (with filters)
// exports.getHotelBookings = async (req, res) => {
//   try {
//     const filters = {};

//     if (req.query.value) {
//       filters[req.query.key] = { $regex: req.query.value, $options: 'i' };
//     }

//     if (req.query.fromDate && req.query.toDate) {
//       filters.createdAt = {
//         $gte: new Date(req.query.fromDate),
//         $lte: new Date(req.query.toDate)
//       };
//     }

//     const bookings = await HotelBooking.find(filters);
//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // POST add new booking
// exports.addHotelBooking = async (req, res) => {
//   try {
//     const booking = await HotelBooking.create(req.body);
//     res.status(201).json(booking);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const HotelBooking = require("../models/hotelBookingModel");

// GET all bookings (with filters)
exports.getHotelBookings = async (req, res) => {
  try {
    const filters = {};

    if (req.query.value && req.query.key) {
      filters[req.query.key] = { $regex: req.query.value, $options: "i" };
    }

    if (req.query.fromDate && req.query.toDate) {
      filters.createdAt = {
        $gte: new Date(req.query.fromDate),
        $lte: new Date(req.query.toDate),
      };
    }

    const bookings = await HotelBooking.find(filters).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE booking
exports.addHotelBooking = async (req, res) => {
  try {
    const booking = await HotelBooking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE booking
exports.updateHotelBooking = async (req, res) => {
  try {
    const updated = await HotelBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE booking
exports.deleteHotelBooking = async (req, res) => {
  try {
    await HotelBooking.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
