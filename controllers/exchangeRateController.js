const ExchangeRate = require("../models/ExchangeRate");

// GET all exchange rates
exports.getExchangeRates = async (req, res) => {
  try {
    const { page = 1, limit = 10, q = "" } = req.query;
    const query = {
      $or: [
        { fromCurrency: { $regex: q, $options: "i" } },
        { toCurrency: { $regex: q, $options: "i" } },
      ],
    };

    const total = await ExchangeRate.countDocuments(query);
    const items = await ExchangeRate.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create exchange rate
exports.createExchangeRate = async (req, res) => {
  try {
    const { fromCurrency, toCurrency, rate, effectiveDate, active } = req.body;

    const newRate = new ExchangeRate({
      fromCurrency,
      toCurrency,
      rate,
      effectiveDate,
      active,
    });

    const saved = await newRate.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update exchange rate
exports.updateExchangeRate = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await ExchangeRate.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE exchange rate
exports.deleteExchangeRate = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ExchangeRate.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
