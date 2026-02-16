const express = require("express");
const router = express.Router();
const {
    getAllSettings,
    addSetting,
    updateSetting,
    deleteSetting
} = require("../controllers/forexSettingController");

router.get("/", getAllSettings);
router.post("/", addSetting);
router.put("/:id", updateSetting);
router.delete("/:id", deleteSetting);

module.exports = router;
