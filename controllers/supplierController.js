const Supplier = require("../models/Supplier");

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().sort({ createdAt: -1 });
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching suppliers" });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = new Supplier({ ...req.body });
    const saved = await newSupplier.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Failed to create supplier" });
  }
};

exports.updateSupplierStatus = async (req, res) => {
  try {
    console.log("hi")
    const { status } = req.body;
    const updated = await Supplier.findByIdAndUpdate(
      req.params.id,
      { status, modifiedAt: new Date() },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update status" });
  }
};




exports.updateSupplier = async (req, res) => {
  try {
    const updated = await Supplier.findByIdAndUpdate(
      req.params.id,
      { ...req.body, modifiedAt: new Date() },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update supplier" });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete supplier" });
  }
};
