const express = require("express");
const {
  getAllDarshanSlots,
  createDarshanSlot,
  updateDarshanSlot,
  deleteDarshanSlot
} = require("../controllers/DarshanSlotController");

const router = express.Router();

router.get("/", getAllDarshanSlots);
router.post("/", createDarshanSlot);
router.put("/:id", updateDarshanSlot);
router.delete("/:id", deleteDarshanSlot);

module.exports = router;
