// controllers/trainBookingController.js
const TrainBooking = require("../models/TrainBooking");

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const payload = req.body;
    // Basic validation
    if (!payload.passengerName || !payload.trainNo || !payload.fromStation || !payload.toStation || !payload.journeyDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Convert journeyDate to Date if string
    if (payload.journeyDate && typeof payload.journeyDate === "string") {
      payload.journeyDate = new Date(payload.journeyDate);
    }

    const booking = await TrainBooking.create(payload);
    res.status(201).json(booking);
  } catch (err) {
    console.error("createBooking:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get list (with pagination & search)
exports.getBookings = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 0; // 0 => all
    const q = req.query.q || "";

    const filter = q
      ? {
          $or: [
            { passengerName: { $regex: q, $options: "i" } },
            { trainNo: { $regex: q, $options: "i" } },
            { fromStation: { $regex: q, $options: "i" } },
            { toStation: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const total = await TrainBooking.countDocuments(filter);

    const items =
      limit > 0
        ? await TrainBooking.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 })
        : await TrainBooking.find(filter).sort({ createdAt: -1 });

    res.json({ items, total });
  } catch (err) {
    console.error("getBookings:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get single
exports.getBooking = async (req, res) => {
  try {
    const booking = await TrainBooking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update booking
exports.updateBooking = async (req, res) => {
  try {
    if (req.body.journeyDate && typeof req.body.journeyDate === "string") {
      req.body.journeyDate = new Date(req.body.journeyDate);
    }
    const updated = await TrainBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error("updateBooking:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const deleted = await TrainBooking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
