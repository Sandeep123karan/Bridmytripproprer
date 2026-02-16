// const Slot = require("../models/SlotModel");

// // Get all slots
// exports.getSlots = async (req, res) => {
//   const slots = await Slot.find();
//   res.json(slots);
// };

// // Create slot
// exports.createSlot = async (req, res) => {
//   const { title, startTime, endTime, isAvailable } = req.body;
//   const slot = new Slot({ title, startTime, endTime, isAvailable });
//   await slot.save();
//   res.status(201).json(slot);
// };

// // Update slot
// exports.updateSlot = async (req, res) => {
//   const slot = await Slot.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(slot);
// };

// // Delete slot
// exports.deleteSlot = async (req, res) => {
//   await Slot.findByIdAndDelete(req.params.id);
//   res.json({ message: "Slot deleted" });
// };
