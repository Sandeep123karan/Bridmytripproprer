const express = require("express");
const {
  createAmendment,
  getAmendments,
  updateAmendment,
  deleteAmendment,
} = require("../controllers/trainAmendmentController");

const router = express.Router();

router.post("/train-amendments", createAmendment);
router.get("/train-amendments", getAmendments);
router.put("/train-amendments/:id", updateAmendment);
router.delete("/train-amendments/:id", deleteAmendment);

module.exports = router;
