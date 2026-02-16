const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { createOrUpdateSetting, getSetting } = require("../controllers/companySettingController");

// File Upload Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/", upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "favicon", maxCount: 1 }
]), createOrUpdateSetting);

router.get("/", getSetting);

module.exports = router;
