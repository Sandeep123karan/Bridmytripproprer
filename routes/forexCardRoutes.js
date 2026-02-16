const express = require("express");
const router = express.Router();

const {
  createForexCard,
  getForexCards,
  getForexCardById,
  updateForexCard,
  deleteForexCard
} = require("../controllers/forexCardController");

router.get("/", getForexCards);
router.get("/:id", getForexCardById);
router.post("/", createForexCard);
router.put("/:id", updateForexCard);
router.delete("/:id", deleteForexCard);

module.exports = router;
