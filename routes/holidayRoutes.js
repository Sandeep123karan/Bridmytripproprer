const express = require("express");
const router = express.Router();
const Holiday = require("../models/Holiday");

// GET all holidays
router.get("/", async (req, res) => {
  const holidays = await Holiday.find();
  res.json(holidays);
});

// POST add holiday
router.post("/", async (req, res) => {
  const newHoliday = new Holiday(req.body);
  await newHoliday.save();
  res.json(newHoliday);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Holiday.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// PUT edit
router.put("/:id", async (req, res) => {
  const updated = await Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;
