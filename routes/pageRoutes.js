const express = require("express");
const router = express.Router();
const {
  getPages,
  addPage,
  updatePage,
  deletePage,
} = require("../controllers/pageController");

router.get("/pages", getPages);
router.post("/page", addPage);
router.put("/page/:id", updatePage);
router.delete("/page/:id", deletePage);

module.exports = router;
