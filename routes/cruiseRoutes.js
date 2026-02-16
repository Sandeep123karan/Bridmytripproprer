const express = require("express");
const router = express.Router();
const cloudUpload = require("../middleware/cloudUpload");
const { addCruise, getCruises, updateCruise, deleteCruise } =
  require("../controllers/cruiseController");

router.post("/", cloudUpload("cruises").single("image"), addCruise);
router.get("/", getCruises);
router.put("/:id", cloudUpload("cruises").single("image"), updateCruise);
router.delete("/:id", deleteCruise);

module.exports = router;
