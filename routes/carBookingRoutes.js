// const express = require('express');
// const router = express.Router();
// const carBookingController = require('../controllers/carBookingController');

// router.get('/', carBookingController.getAllBookings);
// router.post('/', carBookingController.createBooking);
// router.delete('/:id', carBookingController.deleteBooking);

// module.exports = router;
const express = require('express');
const router = express.Router();
const carBookingController = require('../controllers/carBookingController');

router.get('/', carBookingController.getAllBookings);
router.get('/:id', carBookingController.getBookingById);
router.post('/', carBookingController.createBooking);
router.put('/:id', carBookingController.updateBooking);
router.delete('/:id', carBookingController.deleteBooking);

module.exports = router;
