const CompanySetting = require("../models/CompanySetting");

exports.createOrUpdateSetting = async (req, res) => {
  try {
    const data = req.body;
    const existing = await CompanySetting.findOne();

    if (req.files) {
      if (req.files.logo) data.logo = req.files.logo[0].filename;
      if (req.files.favicon) data.favicon = req.files.favicon[0].filename;
    }

    let setting;
    if (existing) {
      setting = await CompanySetting.findByIdAndUpdate(existing._id, data, { new: true });
    } else {
      setting = await CompanySetting.create(data);
    }

    res.status(200).json(setting);
  } catch (err) {
    res.status(500).json({ message: "Failed to save settings", error: err.message });
  }
};

exports.getSetting = async (req, res) => {
  try {
    const setting = await CompanySetting.findOne();
    res.json(setting);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch setting", error: err.message });
  }
};
