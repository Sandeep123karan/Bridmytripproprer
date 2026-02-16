// const express = require("express");
// const router = express.Router();
// const {
//   getAmendmentsByDate,
//   addAmendment
// } = require("../controllers/flightAmendmentController");

// router.get("/by-date", getAmendmentsByDate);
// router.post("/add", addAmendment);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  addAmendment,
  getAmendments,
  getAmendmentsByDate,
  updateAmendment,
  deleteAmendment
} = require("../controllers/flightAmendmentController");

// CRUD ROUTES
router.post("/", addAmendment);       // CREATE
router.get("/", getAmendments);       // READ ALL
router.get("/by-date", getAmendmentsByDate); // FILTER BY DATE
router.put("/:id", updateAmendment);  // UPDATE
router.delete("/:id", deleteAmendment); // DELETE

module.exports = router;
