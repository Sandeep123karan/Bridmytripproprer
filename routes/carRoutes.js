

const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.post("/add", carController.addCar);   // add car
router.get("/", carController.getCars);     // all cars
router.delete("/:id", carController.deleteCar); // delete

module.exports = router;
