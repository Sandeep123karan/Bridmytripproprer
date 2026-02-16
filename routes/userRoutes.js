const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  getAdminProfile
} = require("../controllers/userController");

const {protect} = require("../middleware/authMiddleware");


// PUBLIC
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);


// PROTECTED
router.get("/profile", protect, getAdminProfile);

module.exports = router;
