// const HolidayBooking = require("../models/HolidayBooking");

// exports.getHolidayBookings = async (req, res) => {
//   try {
//     const {
//       businessType,
//       searchKey,
//       value,
//     } = req.query;

//     let query = {};

//     if (businessType) {
//       query.type = businessType;
//     }

//     if (searchKey && value) {
//       query[searchKey.toLowerCase()] = { $regex: value, $options: "i" };
//     }

//     const data = await HolidayBooking.find(query).sort({ createdAt: -1 });
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching bookings" });
//   }
// };

// exports.createBooking = async (req, res) => {
//   try {
//     const booking = new HolidayBooking(req.body);
//     await booking.save();
//     res.status(201).json({ message: "Booking created", booking });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create booking" });
//   }
// };

// exports.deleteBooking = async (req, res) => {
//   try {
//     const { refNo } = req.params;
//     await HolidayBooking.deleteOne({ refNo });
//     res.json({ message: `Booking ${refNo} deleted` });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete booking" });
//   }
// };
const HolidayBooking = require("../models/HolidayBooking");

// GET ALL + FILTER
exports.getHolidayBookings = async (req, res) => {
  try {
    const { businessType, searchKey, value, fromDate, toDate } = req.query;

    let query = {};

    // Business Type
    if (businessType) query.type = businessType;

    // Search by key + value
    if (searchKey && value) {
      query[searchKey] = { $regex: value, $options: "i" };
    }

    // Date Range Filter
    if (fromDate || toDate) {
      query.travelDate = {};
      if (fromDate) query.travelDate.$gte = new Date(fromDate);
      if (toDate) query.travelDate.$lte = new Date(toDate);
    }

    const data = await HolidayBooking.find(query).sort({ createdAt: -1 });
    res.json(data);

  } catch (err) {
    res.status(500).json({ message: "Error fetching holiday bookings", error: err.message });
  }
};

// GET SINGLE BOOKING
exports.getBookingById = async (req, res) => {
  try {
    const booking = await HolidayBooking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: "Error fetching booking", error: err.message });
  }
};

// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {
    const newBooking = new HolidayBooking(req.body);
    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to create booking", error: err.message });
  }
};

// UPDATE BOOKING
exports.updateBooking = async (req, res) => {
  try {
    const updated = await HolidayBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Booking not found" });

    res.json({
      message: "Booking updated successfully",
      booking: updated
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to update booking", error: err.message });
  }
};

// DELETE BOOKING (by id)
exports.deleteBooking = async (req, res) => {
  try {
    await HolidayBooking.findByIdAndDelete(req.params.id);

    res.json({
      message: "Booking deleted successfully"
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to delete booking", error: err.message });
  }
};

// DELETE BY REF NO
exports.deleteBookingByRef = async (req, res) => {
  try {
    const { refNo } = req.params;

    const result = await HolidayBooking.findOneAndDelete({ refNo });

    if (!result) {
      return res.status(404).json({ message: "Booking not found for this Ref No" });
    }

    res.json({ message: `Booking with Ref No ${refNo} deleted` });

  } catch (err) {
    res.status(500).json({ message: "Failed to delete booking", error: err.message });
  }
};
