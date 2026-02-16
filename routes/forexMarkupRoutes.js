const express = require("express");
const router = express.Router();
const {
  createForexMarkup,
  getForexMarkups,
  updateForexMarkup,
  deleteForexMarkup
} = require("../controllers/forexMarkupController");

// Routes
router.post("/", createForexMarkup);
router.get("/", getForexMarkups);
router.put("/:id", updateForexMarkup);
router.delete("/:id", deleteForexMarkup);

module.exports = router;
