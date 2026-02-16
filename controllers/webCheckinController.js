const WebCheckin = require('../models/WebCheckin');
const path = require('path');
const fs = require('fs');

exports.getAll = async (req, res) => {
  const items = await WebCheckin.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.create = async (req, res) => {
  const { airlineCode, airlineName, url } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';
  const item = await WebCheckin.create({ airlineCode, airlineName, url, image });
  res.json(item);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  if (req.file) updatedData.image = `/uploads/${req.file.filename}`;
  const item = await WebCheckin.findByIdAndUpdate(id, updatedData, { new: true });
  res.json(item);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  await WebCheckin.findByIdAndDelete(id);
  res.sendStatus(204);
};
