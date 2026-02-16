// const express = require('express');
// const router = express.Router();
// const hotelController = require('../controllers/addHotelController');

// router.post('/', hotelController.createHotel);
// router.get('/', hotelController.getHotels);
// router.get('/:id', hotelController.getHotelById);
// router.put('/:id', hotelController.updateHotel);
// router.delete('/:id', hotelController.deleteHotel);

// module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/addHotelController");

router.post("/", controller.createHotel);
router.get("/", controller.getHotels);
router.get("/:id", controller.getHotelById);
router.put("/:id", controller.updateHotel);
router.delete("/:id", controller.deleteHotel);

module.exports = router;
