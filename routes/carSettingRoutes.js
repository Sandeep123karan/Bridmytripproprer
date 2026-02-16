const express = require("express");
const router = express.Router();
const {
  addCarSetting,
  getCarSettings,
  updateCarSetting,
  deleteCarSetting,
} = require("../controllers/carSettingController");

router.post("/", addCarSetting);
router.get("/", getCarSettings);
router.put("/:id", updateCarSetting);
router.delete("/:id", deleteCarSetting);

module.exports = router;
