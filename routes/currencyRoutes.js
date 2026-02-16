// const express = require('express');
// const router = express.Router();
// const { getExchangeRates, convertCurrency } = require('../controllers/currencyController');

// // Currency & Forex Routes
// router.get('/rates', getExchangeRates);
// router.post('/convert', convertCurrency);

// // Currency management
// router.get('/list', async (req, res) => {
//   try {
//     const Currency = require('../models/Currency');
//     const currencies = await Currency.find({ isActive: true }).sort({ currencyCode: 1 });
//     res.json({ success: true, data: currencies });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Forex card routes
// router.get('/forex-cards', async (req, res) => {
//   try {
//     const ForexCard = require('../models/ForexCard');
//     const cards = await ForexCard.find({ isActive: true });
//     res.json({ success: true, data: cards });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Forex booking
// router.post('/forex/book', async (req, res) => {
//   try {
//     const ForexBooking = require('../models/ForexBooking');
//     const bookingId = 'FRX' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const booking = new ForexBooking({
//       ...req.body,
//       bookingId
//     });
    
//     await booking.save();
//     res.json({ success: true, data: booking, message: 'Forex booking created successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// router.get('/forex/bookings', async (req, res) => {
//   try {
//     const ForexBooking = require('../models/ForexBooking');
//     const bookings = await ForexBooking.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  addCurrency,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
} = require("../controllers/currencyController");

router.post("/", addCurrency);
router.get("/", getCurrencies);
router.put("/:id", updateCurrency);
router.delete("/:id", deleteCurrency);

module.exports = router;
