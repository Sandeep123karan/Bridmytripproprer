// const CarEnquiry = require('../models/CarEnquiry');

// // @desc Get all car enquiries with filters
// exports.getAllCarEnquiries = async (req, res) => {
//   try {
//     const { key, value, fromDate, toDate } = req.query;
//     const query = {};

//     if (key && value) {
//       query[key] = { $regex: value, $options: 'i' };
//     }

//     if (fromDate && toDate) {
//       query.createdAt = {
//         $gte: new Date(fromDate),
//         $lte: new Date(toDate),
//       };
//     }

//     const enquiries = await CarEnquiry.find(query).sort({ createdAt: -1 });
//     res.json(enquiries);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // @desc Delete a car enquiry
// exports.deleteCarEnquiry = async (req, res) => {
//   try {
//     await CarEnquiry.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const CarEnquiry = require('../models/CarEnquiry');

// =============================
// Get All with Filters
// =============================
exports.getAllCarEnquiries = async (req, res) => {
  try {
    const { key, value, fromDate, toDate } = req.query;
    let query = {};

    if (key && value) {
      query[key] = { $regex: value, $options: "i" };
    }

    if (fromDate || toDate) {
      query.createdAt = {};
      if (fromDate) query.createdAt.$gte = new Date(fromDate);
      if (toDate) query.createdAt.$lte = new Date(toDate);
    }

    const enquiries = await CarEnquiry.find(query).sort({ createdAt: -1 });
    res.json(enquiries);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// Get Single Enquiry
// =============================
exports.getCarEnquiryById = async (req, res) => {
  try {
    const enquiry = await CarEnquiry.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ message: "Not found" });
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// Create Enquiry
// =============================
exports.createCarEnquiry = async (req, res) => {
  try {
    const enquiry = new CarEnquiry(req.body);
    await enquiry.save();
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// Update Enquiry
// =============================
exports.updateCarEnquiry = async (req, res) => {
  try {
    const updated = await CarEnquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// Delete Enquiry
// =============================
exports.deleteCarEnquiry = async (req, res) => {
  try {
    await CarEnquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
