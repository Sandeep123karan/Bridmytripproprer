const express = require("express");
const {
  createMarkup,
  getMarkups,
  updateMarkup,
  deleteMarkup
} = require("../controllers/trainMarkupController");

const router = express.Router();

router.post("/train-markups", createMarkup);
router.get("/train-markups", getMarkups);
router.put("/train-markups/:id", updateMarkup);
router.delete("/train-markups/:id", deleteMarkup);

module.exports = router;
