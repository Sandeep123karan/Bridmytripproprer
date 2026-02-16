// routes/moneyTransferRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/moneyTransferController");

router.post("/", controller.createTransfer);
router.get("/", controller.getTransfers);
router.get("/:id", controller.getTransferById);
router.put("/:id", controller.updateTransfer);
router.delete("/:id", controller.deleteTransfer);

module.exports = router;
