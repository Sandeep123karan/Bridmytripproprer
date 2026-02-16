const express = require("express");
const router = express.Router();
const controller = require("../controllers/flightTopDestinationController");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/status", controller.updateStatus);
router.delete("/:id", controller.deleteOne);

module.exports = router;
