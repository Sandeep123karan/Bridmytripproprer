// const Slot = require("../models/SlotModel");

// // Get all slots
// exports.getAllDarshanSlots = async (req, res) => {
//   try {
//     const slots = await Slot.find();
//     res.json(slots);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Create slot
// exports.createDarshanSlot = async (req, res) => {
//   try {
//     const { date, time, capacity } = req.body;
//     const slot = new Slot({ date, time, capacity });
//     await slot.save();
//     res.status(201).json(slot);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update slot
// exports.updateDarshanSlot = async (req, res) => {
//   try {
//     const slot = await Slot.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(slot);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete slot
// exports.deleteDarshanSlot = async (req, res) => {
//   try {
//     await Slot.findByIdAndDelete(req.params.id);
//     res.json({ message: "Darshan slot deleted" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
