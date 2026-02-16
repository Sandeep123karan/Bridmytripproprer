// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const controller = require('../controllers/holidayThemeController');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });

// const upload = multer({ storage });

// router.get("/", controller.getAll);
// router.post("/", upload.single("themeImage"), controller.create);
// router.put("/:id", upload.single("themeImage"), controller.update);
// router.delete("/:id", controller.delete);
// router.put("/toggle-status/:id", controller.toggleStatus);

// module.exports = router;
const express = require("express");
const router = express.Router();
const controller = require("../controllers/holidayThemeController");
const cloudUpload = require("../middleware/cloudUpload");

const upload = cloudUpload("holiday-themes");

router.get("/", controller.getAll);
router.post("/", upload.single("themeImage"), controller.create);
router.put("/:id", upload.single("themeImage"), controller.update);
router.delete("/:id", controller.delete);
router.put("/toggle-status/:id", controller.toggleStatus);

module.exports = router;
