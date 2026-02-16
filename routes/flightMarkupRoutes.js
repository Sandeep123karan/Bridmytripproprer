// const express = require('express');
// const router = express.Router();
// const { createMarkup, getAllMarkups } = require('../controllers/flightMarkupController');

// router.post('/', createMarkup);
// router.get('/', getAllMarkups);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  createMarkup,
  getAllMarkups,
  updateMarkup,
  deleteMarkup,
  toggleStatus
} = require("../controllers/flightMarkupController");

router.post("/", createMarkup);
router.get("/", getAllMarkups);
router.put("/:id", updateMarkup);
router.delete("/:id", deleteMarkup);
router.put("/status/:id", toggleStatus);

module.exports = router;
