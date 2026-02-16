const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/flightTopRouteController');

router.post('/', ctrl.createRoute);
router.get('/', ctrl.getRoutes);
router.put('/:id', ctrl.updateRoute);
router.delete('/:id', ctrl.deleteRoute);

module.exports = router;