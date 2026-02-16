const FlightTopRoute = require('../models/FlightTopRoute');

exports.createRoute = async (req, res) => {
  try {
    const newRoute = new FlightTopRoute(req.body);
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRoutes = async (req, res) => {
  try {
    const routes = await FlightTopRoute.find().sort({ createdAt: -1 });
    res.json(routes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const updated = await FlightTopRoute.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    await FlightTopRoute.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
