const ClubMember = require("../models/ClubMember");

// Create new member
exports.createMember = async (req, res) => {
  try {
    const member = await ClubMember.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all members
exports.getMembers = async (req, res) => {
  try {
    const members = await ClubMember.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single member
exports.getMemberById = async (req, res) => {
  try {
    const member = await ClubMember.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update member
exports.updateMember = async (req, res) => {
  try {
    const member = await ClubMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(member);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete member
exports.deleteMember = async (req, res) => {
  try {
    await ClubMember.findByIdAndDelete(req.params.id);
    res.json({ message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
