// const FlightDiscount = require("../models/FlightDiscount");

// exports.createDiscount = async (req, res) => {
//   try {
//     const discount = await FlightDiscount.create(req.body);
//     res.status(201).json(discount);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getAllDiscounts = async (req, res) => {
//   try {
//     const discounts = await FlightDiscount.find().sort({ createdAt: -1 });
//     res.json(discounts);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateDiscount = async (req, res) => {
//   try {
//     const updated = await FlightDiscount.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteDiscount = async (req, res) => {
//   try {
//     await FlightDiscount.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const FlightDiscount = require("../models/FlightDiscount");

// CREATE
exports.createDiscount = async (req, res) => {
  try {
    const discount = await FlightDiscount.create(req.body);
    res.status(201).json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await FlightDiscount.find().sort({ createdAt: -1 });
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateDiscount = async (req, res) => {
  try {
    const updated = await FlightDiscount.findByIdAndUpdate(
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
exports.deleteDiscount = async (req, res) => {
  try {
    await FlightDiscount.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TOGGLE STATUS
exports.toggleStatus = async (req, res) => {
  try {
    const discount = await FlightDiscount.findById(req.params.id);
    discount.status = discount.status === "Active" ? "Inactive" : "Active";
    await discount.save();

    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
