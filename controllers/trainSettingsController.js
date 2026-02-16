const TrainSettings = require("../models/TrainSettings");

// GET Settings (always returns 1 document)
exports.getSettings = async (req, res) => {
  try {
    let settings = await TrainSettings.findOne();

    // Auto create default settings if none found
    if (!settings) {
      settings = await TrainSettings.create({});
    }

    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE Settings
exports.updateSettings = async (req, res) => {
  try {
    let settings = await TrainSettings.findOne();

    if (!settings) {
      settings = await TrainSettings.create(req.body);
    } else {
      settings = await TrainSettings.findByIdAndUpdate(settings._id, req.body, {
        new: true,
      });
    }

    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
