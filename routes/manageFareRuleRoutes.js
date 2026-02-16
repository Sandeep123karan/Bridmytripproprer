const express = require("express");
const {
  createRule,
  getAllRules,
  updateRule,
  deleteRule,
} = require("../controllers/manageFareRuleController");

const router = express.Router();

router.post("/", createRule);
router.get("/", getAllRules);
router.put("/:id", updateRule);
router.delete("/:id", deleteRule);

module.exports = router;
