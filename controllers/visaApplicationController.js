// const VisaApplication = require('../models/VisaApplication');

// // CREATE
// exports.createVisaApplication = async (req, res) => {
//   try {
//     const doc = await VisaApplication.create(req.body);
//     res.status(201).json(doc);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // READ ALL
// exports.getAllVisaApplications = async (req, res) => {
//   try {
//     const docs = await VisaApplication.find().sort({ createdAt: -1 });
//     res.json(docs);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // READ ONE
// exports.getVisaApplication = async (req, res) => {
//   try {
//     const doc = await VisaApplication.findById(req.params.id);
//     if (!doc) return res.status(404).json({ message: 'Not Found' });
//     res.json(doc);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // UPDATE
// exports.updateVisaApplication = async (req, res) => {
//   try {
//     const doc = await VisaApplication.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!doc) return res.status(404).json({ message: 'Not Found' });
//     res.json(doc);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // DELETE
// exports.deleteVisaApplication = async (req, res) => {
//   try {
//     const doc = await VisaApplication.findByIdAndDelete(req.params.id);
//     if (!doc) return res.status(404).json({ message: 'Not Found' });

//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

const VisaApplication = require("../models/VisaApplication");

// CREATE
exports.createVisaApplication = async (req, res) => {
  try {
    const doc = await VisaApplication.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// READ ALL
exports.getAllVisaApplications = async (req, res) => {
  try {
    const docs = await VisaApplication.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// READ ONE
exports.getVisaApplication = async (req, res) => {
  try {
    const doc = await VisaApplication.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not Found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE
exports.updateVisaApplication = async (req, res) => {
  try {
    const doc = await VisaApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ message: "Not Found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE
exports.deleteVisaApplication = async (req, res) => {
  try {
    const doc = await VisaApplication.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not Found" });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
