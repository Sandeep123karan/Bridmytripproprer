const Contact = require("../models/Contact");

// Create contact
exports.createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all contacts (with optional filters)
exports.getContacts = async (req, res) => {
  try {
    const { key, value, fromDate, toDate } = req.query;
    let filter = {};

    if (key && value) filter[key] = new RegExp(value, "i");
    if (fromDate && toDate)
      filter.createdAt = { $gte: new Date(fromDate), $lte: new Date(toDate) };

    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
