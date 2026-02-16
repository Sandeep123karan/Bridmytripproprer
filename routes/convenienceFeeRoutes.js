// const express = require('express');
// const { getFees, addFee } = require('../controllers/convenienceFeeController');
// const router = express.Router();

// router.get('/', getFees);
// router.post('/', addFee);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getFees,
  addFee,
  updateFee,
  deleteFee
} = require('../controllers/convenienceFeeController');

router.get('/', getFees);
router.post('/', addFee);
router.put('/:id', updateFee);
router.delete('/:id', deleteFee);

module.exports = router;
