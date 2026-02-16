const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, user: "U1", hotel: "Taj", status: "Confirmed" },
    { id: 2, user: "U2", flight: "6E-202", status: "Pending" },
  ]);
});

module.exports = router;