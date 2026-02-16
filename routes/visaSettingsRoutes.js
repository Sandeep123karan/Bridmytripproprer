const express = require("express");
const router = express.Router();
const controller = require("../controllers/visaSettingsController");

// GET single settings (creates default if none)
router.get("/", controller.getSettings);

// OPTIONAL: create only if none exists
router.post("/", controller.createSettings);

// Update (PUT) — upserts if not exists
router.put("/", controller.updateSettings);

// Delete by id (optional, for dev)
router.delete("/:id", controller.deleteSettings);

module.exports = router;
