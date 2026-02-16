// const FlightAmendment = require("../models/FlightAmendment");

// exports.getAmendmentsByDate = async (req, res) => {
//   try {
//     const { fromDate, toDate } = req.query;

//     const amendments = await FlightAmendment.find({
//       departureDate: {
//         $gte: new Date(fromDate),
//         $lte: new Date(toDate),
//       },
//     });

//     res.json(amendments);
//   } catch (error) {
//     console.error("❌ Error fetching amendments:", error.message);
//     res.status(500).json({ message: "Failed to get amendments" });
//   }
// };

// exports.addAmendment = async (req, res) => {
//   try {
//     const newAmendment = new FlightAmendment(req.body);
//     await newAmendment.save();
//     res.status(201).json({ message: "Amendment saved successfully" });
//   } catch (err) {
//     console.error("❌ Error saving amendment:", err.message);
//     res.status(500).json({ message: "Failed to save amendment" });
//   }
// };
const FlightAmendment = require("../models/FlightAmendment");

// CREATE
exports.addAmendment = async (req, res) => {
  try {
    const amendment = await FlightAmendment.create(req.body);
    res.status(201).json(amendment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ALL
exports.getAmendments = async (req, res) => {
  try {
    const data = await FlightAmendment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ BY DATE RANGE
exports.getAmendmentsByDate = async (req, res) => {
  try {
    const { fromDate, toDate } = req.query;

    const amendments = await FlightAmendment.find({
      departureDate: {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      }
    });

    res.json(amendments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch amendments" });
  }
};

// UPDATE
exports.updateAmendment = async (req, res) => {
  try {
    const updated = await FlightAmendment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteAmendment = async (req, res) => {
  try {
    await FlightAmendment.findByIdAndDelete(req.params.id);
    res.json({ message: "Amendment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
