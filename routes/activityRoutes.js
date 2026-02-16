// const express = require("express");
// const router = express.Router();
// const { addActivity } = require("../controllers/activityController");
// const cloudUpload = require("../middleware/cloudUpload");

// router.post("/", cloudUpload("activities").single("image"), addActivity);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  addActivity,
  getActivities,
  getSingleActivity,
  updateActivity,
  deleteActivity
} = require("../controllers/activityController");

const cloudUpload = require("../middleware/cloudUpload");

// CREATE
router.post("/", cloudUpload("activities").single("image"), addActivity);

// READ ALL
router.get("/", getActivities);

// READ ONE
router.get("/:id", getSingleActivity);

// UPDATE
router.put("/:id", cloudUpload("activities").single("image"), updateActivity);

// DELETE
router.delete("/:id", deleteActivity);

module.exports = router;
