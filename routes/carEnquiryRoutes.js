// const express = require('express');
// const router = express.Router();
// const {
//   getAllCarEnquiries,
//   deleteCarEnquiry,
// } = require('../controllers/carEnquiryController');

// router.get('/', getAllCarEnquiries);
// router.delete('/:id', deleteCarEnquiry);

// module.exports = router;
const express = require('express');
const router = express.Router();

const {
  getAllCarEnquiries,
  getCarEnquiryById,
  createCarEnquiry,
  updateCarEnquiry,
  deleteCarEnquiry
} = require('../controllers/carEnquiryController');

router.get('/', getAllCarEnquiries);
router.get('/:id', getCarEnquiryById);
router.post('/', createCarEnquiry);
router.put('/:id', updateCarEnquiry);
router.delete('/:id', deleteCarEnquiry);

module.exports = router;
