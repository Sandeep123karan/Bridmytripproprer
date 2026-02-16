const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({ message: "Hotel added", data: req.body });
});

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Taj Hotel", city: "Mumbai" },
    { id: 2, name: "Oberoi", city: "Delhi" },
  ]);
});

module.exports = router;