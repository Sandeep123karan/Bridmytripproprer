const express = require("express");
const router = express.Router();
const HolidayQuery = require("../models/holidayQueryModel");

router.get("/", async (req, res) => {
  const data = await HolidayQuery.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const item = new HolidayQuery(req.body);
  await item.save();
  res.status(201).json(item);
});

router.put("/:id", async (req, res) => {
  const item = await HolidayQuery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await HolidayQuery.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
