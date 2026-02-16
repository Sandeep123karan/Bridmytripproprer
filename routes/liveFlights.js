// const express = require('express');
// const { getFares, addFare, updateFare, deleteFare } = require('../controllers/flightFareController');
// const router = express.Router();

// router.get('/', getFares);
// router.post('/', addFare);
// router.put('/:id', updateFare);
// router.delete('/:id', deleteFare); // <-- add this

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { getLiveFlights } = require('../controllers/liveFlightController');

// router.get('/', getLiveFlights);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { getLiveFlights, getAllFlights } = require("../controllers/liveFlightController");

router.get("/fetch", getLiveFlights); // call API & save to Mongo
router.get("/all", getAllFlights);   // fetch from Mongo

module.exports = router;