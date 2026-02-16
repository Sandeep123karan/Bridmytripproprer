const express = require("express");
const router = express.Router();
const {
  createPrivateFare,
  getPrivateFares,
  updatePrivateFare,
  deletePrivateFare,
} = require("../controllers/privateFareController");

router.post("/", createPrivateFare);
router.get("/", getPrivateFares);
router.put("/:id", updatePrivateFare);
router.delete("/:id", deletePrivateFare);

module.exports = router;
