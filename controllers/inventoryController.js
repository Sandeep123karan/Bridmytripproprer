const Inventory = require("../models/inventoryModel");

exports.createInventory = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (error) {
    console.error("❌ Inventory creation error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find().sort({ createdAt: -1 });
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};
