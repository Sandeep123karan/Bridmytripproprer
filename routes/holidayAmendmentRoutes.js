
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/holidayAmendmentController");

router.get("/", ctrl.getHolidayAmendments);
router.post("/", ctrl.addHolidayAmendment);
router.put("/:id", ctrl.updateHolidayAmendment);
router.delete("/:id", ctrl.deleteHolidayAmendment);

module.exports = router;
