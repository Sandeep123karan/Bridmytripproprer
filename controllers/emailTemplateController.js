const EmailTemplate = require("../models/emailTemplateModel");

exports.createEmailTemplate = async (req, res) => {
  try {
    const template = await EmailTemplate.create(req.body);
    res.status(201).json(template);
  } catch (error) {
    res.status(500).json({ message: "Error creating template", error });
  }
};

exports.getAllEmailTemplates = async (req, res) => {
  try {
    const templates = await EmailTemplate.find().sort({ createdAt: -1 });
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching templates", error });
  }
};

exports.updateEmailTemplate = async (req, res) => {
  try {
    const updated = await EmailTemplate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating template", error });
  }
};

exports.deleteEmailTemplate = async (req, res) => {
  try {
    await EmailTemplate.findByIdAndDelete(req.params.id);
    res.json({ message: "Template deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting template", error });
  }
};
