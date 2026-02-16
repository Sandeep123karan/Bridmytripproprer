// const express = require("express");
// const router = express.Router();
// const {
//   getHotelAmendments,
//   addHotelAmendment
// } = require("../controllers/hotelAmendmentController");

// router.get("/", getHotelAmendments);
// router.post("/", addHotelAmendment);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  getHotelAmendments,
  addHotelAmendment,
  updateHotelAmendment,
  deleteHotelAmendment
} = require("../controllers/hotelAmendmentController");

router.get("/", getHotelAmendments);
router.post("/", addHotelAmendment);
router.put("/:id", updateHotelAmendment);
router.delete("/:id", deleteHotelAmendment);

module.exports = router;
