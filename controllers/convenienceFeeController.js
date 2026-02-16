// const ConvenienceFee = require('../models/convenienceFeeModel');

// // GET all convenience fees
// const getFees = async (req, res) => {
//   try {
//     const fees = await ConvenienceFee.find();
//     res.json(fees);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch fees" });
//   }
// };

// // POST new convenience fee
// const addFee = async (req, res) => {
//   try {
//     const fee = new ConvenienceFee(req.body);
//     await fee.save();
//     res.status(201).json(fee);
//   } catch (err) {
//     res.status(400).json({ message: "Failed to add fee", error: err.message });
//   }
// };

// module.exports = { getFees, addFee };
const Fee = require('../models/convenienceFeeModel');

const getFees = async (req, res) => {
  try {
    const fees = await Fee.find().sort({ createdAt: -1 });
    res.status(200).json(fees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching fees', error: err.message });
  }
};

const addFee = async (req, res) => {
  try {
    const { airline, fareType, feeType, value } = req.body;

    if (!airline || !fareType || !feeType || value === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newFee = new Fee({
      airline,
      fareType,
      feeType,
      value
    });

    await newFee.save();
    res.status(201).json(newFee);
  } catch (err) {
    res.status(500).json({ message: 'Error adding fee', error: err.message });
  }
};

const updateFee = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Fee.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Fee not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating fee', error: err.message });
  }
};

const deleteFee = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Fee.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Fee not found' });
    }

    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting fee', error: err.message });
  }
};

module.exports = {
  getFees,
  addFee,
  updateFee,
  deleteFee
};
