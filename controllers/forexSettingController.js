const ForexSetting = require("../models/forexSettingModel");

// Get all settings
exports.getAllSettings = async (req, res) => {
    try {
        const settings = await ForexSetting.find();
        res.json(settings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new setting
exports.addSetting = async (req, res) => {
    try {
        const { currency, buyRate, sellRate, status } = req.body;
        const newSetting = new ForexSetting({ currency, buyRate, sellRate, status });
        await newSetting.save();
        res.status(201).json(newSetting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update setting
exports.updateSetting = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await ForexSetting.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete setting
exports.deleteSetting = async (req, res) => {
    try {
        const { id } = req.params;
        await ForexSetting.findByIdAndDelete(id);
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
