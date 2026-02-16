const express = require("express");
const router = express.Router();
const {
  createFareRule,
  getFareRules,
  updateFareRule,
  deleteFareRule,
} = require("../controllers/fareRuleController");

router.post("/", createFareRule);
router.get("/", getFareRules);
router.put("/:id", updateFareRule);
router.delete("/:id", deleteFareRule);

module.exports = router;