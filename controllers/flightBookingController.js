// const FlightBooking = require("../models/FlightBooking");

// exports.getBookingsByDate = async (req, res) => {
//   const { fromDate, toDate } = req.query;

//   try {
//     const bookings = await FlightBooking.find({
//       bookingDate: {
//         $gte: new Date(fromDate),
//         $lte: new Date(toDate)
//       }
//     });

//     res.json(bookings);
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };
const FlightBooking = require("../models/FlightBooking");

// CREATE
exports.createBooking = async (req, res) => {
  try {
    const booking = await FlightBooking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.getBookings = async (req, res) => {
  try {
    const data = await FlightBooking.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ BY DATE FILTER
exports.getBookingsByDate = async (req, res) => {
  const { fromDate, toDate } = req.query;

  try {
    const bookings = await FlightBooking.find({
      bookingDate: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      }
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE
exports.updateBooking = async (req, res) => {
  try {
    const updated = await FlightBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteBooking = async (req, res) => {
  try {
    await FlightBooking.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
