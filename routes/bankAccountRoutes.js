const express = require('express');
const { getAccounts, addAccount } = require('../controllers/bankAccountController');
const router = express.Router();

router.get('/', getAccounts);
router.post('/', addAccount);

module.exports = router;
