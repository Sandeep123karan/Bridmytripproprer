const FlightApiSupplier = require("../models/flightApiSupplierModel");

exports.getFlightApiSuppliers = async (req, res) => {
  try {
    const suppliers = await FlightApiSupplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFlightApiSupplier = async (req, res) => {
  try {
    const newSupplier = new FlightApiSupplier(req.body);
    const saved = await newSupplier.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
