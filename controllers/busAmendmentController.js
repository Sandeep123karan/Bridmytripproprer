  const BusAmendment = require("../models/BusAmendment");

  // Get all
  exports.getAll = async (req, res) => {
    try {
      const data = await BusAmendment.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // Get by ID
  exports.getById = async (req, res) => {
    try {
      const data = await BusAmendment.findById(req.params.id);
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // Create
  exports.create = async (req, res) => {
    try {
      const data = new BusAmendment(req.body);
      await data.save();
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // Update
  exports.update = async (req, res) => {
    try {
      const data = await BusAmendment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(data);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // Delete
  exports.remove = async (req, res) => {
    try {
      await BusAmendment.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
