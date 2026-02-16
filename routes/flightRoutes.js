const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({ message: "Flight added", data: req.body });
});

router.get("/", (req, res) => {
  res.json([
    { id: 1, airline: "IndiGo", from: "Delhi", to: "Mumbai" },
    { id: 2, airline: "Air India", from: "Kolkata", to: "Goa" },
  ]);
});

module.exports = router;