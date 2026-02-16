const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controller = require("../controllers/blogCategoryController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post("/", upload.single("image"), controller.createBlogCategory);
router.get("/", controller.getBlogCategories);
router.put("/:id", upload.single("image"), controller.updateBlogCategory);
router.delete("/:id", controller.deleteBlogCategory);
router.patch("/status/:id", controller.toggleStatus);

module.exports = router;
