// controllers/moneyTransferController.js
const MoneyTransfer = require("../models/moneyTransferModel");
const { v4: uuidv4 } = require("uuid");

// Create transfer
exports.createTransfer = async (req, res) => {
  try {
    const body = req.body;
    // create transactionId if not provided
    if (!body.transactionId) body.transactionId = `MT-${uuidv4()}`;

    const transfer = new MoneyTransfer(body);
    await transfer.save();
    res.status(201).json(transfer);
  } catch (err) {
    console.error("createTransfer:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// List transfers (with pagination & search)
exports.getTransfers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const q = req.query.q || "";

    const filter = q
      ? {
          $or: [
            { transactionId: { $regex: q, $options: "i" } },
            { senderName: { $regex: q, $options: "i" } },
            { receiverName: { $regex: q, $options: "i" } },
            { fromCurrency: { $regex: q, $options: "i" } },
            { toCurrency: { $regex: q, $options: "i" } },
            { status: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const total = await MoneyTransfer.countDocuments(filter);
    const items = await MoneyTransfer.find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({ items, total });
  } catch (err) {
    console.error("getTransfers:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get single
exports.getTransferById = async (req, res) => {
  try {
    const t = await MoneyTransfer.findById(req.params.id);
    if (!t) return res.status(404).json({ message: "Not found" });
    res.json(t);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update (e.g., mark completed)
exports.updateTransfer = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.status === "completed") updates.processedAt = new Date();
    const t = await MoneyTransfer.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!t) return res.status(404).json({ message: "Not found" });
    res.json(t);
  } catch (err) {
    console.error("updateTransfer:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Delete
exports.deleteTransfer = async (req, res) => {
  try {
    const t = await MoneyTransfer.findByIdAndDelete(req.params.id);
    if (!t) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
