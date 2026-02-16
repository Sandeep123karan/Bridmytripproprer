const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/flightReplaceController');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.patch('/:id/toggle', ctrl.toggleStatus);

module.exports = router;
