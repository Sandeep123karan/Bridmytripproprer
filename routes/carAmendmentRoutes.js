const express = require("express");
const router = express.Router();
const controller = require("../controllers/carAmendmentController");

router.post("/", controller.createCarAmendment);
router.get("/", controller.getCarAmendments);
router.put("/:id", controller.updateCarAmendment);
router.delete("/:id", controller.deleteCarAmendment);

module.exports = router;
