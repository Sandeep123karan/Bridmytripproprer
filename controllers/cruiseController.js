const Cruise = require("../models/Cruise");

exports.addCruise = async (req, res) => {
  try {
    const cruise = new Cruise({
      cruiseName: req.body.cruiseName,
      destination: req.body.destination,
      price: req.body.price,
      departureDate: req.body.departureDate,
      returnDate: req.body.returnDate,
      image: req.file ? req.file.path : null,
    });

    await cruise.save();
    res.status(201).json(cruise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCruises = async (req, res) => {
  try {
    const cruises = await Cruise.find();
    res.json(cruises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCruise = async (req, res) => {
  try {
    const updateData = {
      cruiseName: req.body.cruiseName,
      destination: req.body.destination,
      price: req.body.price,
      departureDate: req.body.departureDate,
      returnDate: req.body.returnDate,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updated = await Cruise.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCruise = async (req, res) => {
  try {
    await Cruise.findByIdAndDelete(req.params.id);
    res.json({ message: "Cruise deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
