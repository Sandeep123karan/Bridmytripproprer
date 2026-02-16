const express = require("express");
const router = express.Router();
const darshanController = require("../controllers/darshanController");

// CRUD Routes
router.post("/", darshanController.createDarshan);        // ➕ Create
router.get("/", darshanController.getDarshans);           // 📜 Get All
router.get("/:id", darshanController.getDarshanById);     // 🔎 Get One
router.put("/:id", darshanController.updateDarshan);      // ✏️ Update
router.delete("/:id", darshanController.deleteDarshan);   // ❌ Delete

module.exports = router;
