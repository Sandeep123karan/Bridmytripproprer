const CarSetting = require("../models/CarSetting");

exports.addCarSetting = async (req, res) => {
  const car = new CarSetting(req.body);
  await car.save();
  res.json(car);
};

exports.getCarSettings = async (req, res) => {
  const cars = await CarSetting.find().sort({ createdAt: -1 });
  res.json(cars);
};

exports.updateCarSetting = async (req, res) => {
  const updated = await CarSetting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteCarSetting = async (req, res) => {
  await CarSetting.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
