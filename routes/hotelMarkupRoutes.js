const express = require("express");
const router = express.Router();
const {
  createHotelMarkup,
  getAllHotelMarkups,
  updateHotelMarkup,
  deleteHotelMarkup
} = require("../controllers/hotelMarkupController");

router.post("/", createHotelMarkup);
router.get("/", getAllHotelMarkups);
router.put("/:id", updateHotelMarkup);
router.delete("/:id", deleteHotelMarkup);

module.exports = router;
