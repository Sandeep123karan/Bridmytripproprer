const FlightTopDestination = require("../models/FlightTopDestination");

exports.getAll = async (req, res) => {
  const data = await FlightTopDestination.find().sort({ createdAt: -1 });
  res.json(data);
};

exports.create = async (req, res) => {
  const newEntry = new FlightTopDestination(req.body);
  await newEntry.save();
  res.json({ message: "Added successfully" });
};

exports.updateStatus = async (req, res) => {
  const { id, status } = req.body;
  await FlightTopDestination.findByIdAndUpdate(id, { status, modifiedAt: new Date() });
  res.json({ message: "Status updated" });
};

exports.deleteOne = async (req, res) => {
  await FlightTopDestination.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
