// controllers/forexCardController.js
const ForexCard = require("../models/forexCardModel");

// Create
exports.createForexCard = async (req, res) => {
  try {
    // ensure supportedCurrencies is array if sent as comma string
    if (req.body.supportedCurrencies && typeof req.body.supportedCurrencies === "string") {
      req.body.supportedCurrencies = req.body.supportedCurrencies.split(",").map(s => s.trim()).filter(Boolean);
    }
    const card = new ForexCard(req.body);
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    console.error("createForexCard:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Read (list with optional pagination & search)
exports.getForexCards = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 0; // 0 => all
    const q = req.query.q || "";

    const filter = q
      ? {
          $or: [
            { provider: { $regex: q, $options: "i" } },
            { cardName: { $regex: q, $options: "i" } },
            { supportedCurrencies: { $regex: q, $options: "i" } },
          ],
        }
      : {};

    const total = await ForexCard.countDocuments(filter);
    const items = limit > 0
      ? await ForexCard.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 })
      : await ForexCard.find(filter).sort({ createdAt: -1 });

    res.json({ items, total });
  } catch (err) {
    console.error("getForexCards:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// Read single
exports.getForexCardById = async (req, res) => {
  try {
    const card = await ForexCard.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateForexCard = async (req, res) => {
  try {
    if (req.body.supportedCurrencies && typeof req.body.supportedCurrencies === "string") {
      req.body.supportedCurrencies = req.body.supportedCurrencies.split(",").map(s => s.trim()).filter(Boolean);
    }
    const card = await ForexCard.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!card) return res.status(404).json({ message: "Not found" });
    res.json(card);
  } catch (err) {
    console.error("updateForexCard:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Delete
exports.deleteForexCard = async (req, res) => {
  try {
    const card = await ForexCard.findByIdAndDelete(req.params.id);
    if (!card) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
