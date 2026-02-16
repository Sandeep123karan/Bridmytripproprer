const express = require("express");
const router = express.Router();
const {
  addCarMarkup,
  getCarMarkups,
  updateCarMarkup,
  deleteCarMarkup,
} = require("../controllers/carMarkupController");

router.post("/car-markup", addCarMarkup);
router.get("/car-markup", getCarMarkups);
router.put("/car-markup/:id", updateCarMarkup);
router.delete("/car-markup/:id", deleteCarMarkup);

module.exports = router;
