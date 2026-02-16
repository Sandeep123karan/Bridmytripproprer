const express = require("express");
const router = express.Router();

const controller = require("../controllers/addHolidayController");
const cloudUpload = require("../middleware/cloudUpload");

const upload = cloudUpload("holiday-packages");

router.get("/", controller.getAllHolidays);
router.post("/", upload.single("packageImage"), controller.createHoliday);
router.put("/:id", upload.single("packageImage"), controller.updateHoliday);
router.delete("/:id", controller.deleteHoliday);

module.exports = router;
