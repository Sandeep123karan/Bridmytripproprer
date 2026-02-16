// const Currency = require('../models/Currency');
// const ForexBooking = require('../models/ForexBooking');

// // Get live exchange rates using Fixer.io API
// const getExchangeRates = async (req, res) => {
//   try {
//     // Using Fixer.io API (Free tier available)
//     const response = await axios.get('http://data.fixer.io/api/latest?access_key=YOUR_FIXER_API_KEY&base=USD');
    
//     const rates = response.data.rates;
    
//     // Convert to INR base
//     const inrRate = rates.INR;
//     const exchangeRates = Object.keys(rates).map(currency => ({
//       currencyCode: currency,
//       rate: rates[currency] / inrRate, // Convert to INR base
//       lastUpdated: new Date()
//     }));

//     res.json({
//       success: true,
//       data: exchangeRates
//     });
//   } catch (error) {
//     console.error('Exchange rates API error:', error);
    
//     // Fallback with mock data
//     const mockRates = [
//       { currencyCode: 'USD', rate: 83.12, lastUpdated: new Date() },
//       { currencyCode: 'EUR', rate: 89.45, lastUpdated: new Date() },
//       { currencyCode: 'GBP', rate: 104.78, lastUpdated: new Date() },
//       { currencyCode: 'AED', rate: 22.64, lastUpdated: new Date() }
//     ];
    
//     res.json({
//       success: true,
//       data: mockRates
//     });
//   }
// };

// // Currency conversion
// const convertCurrency = async (req, res) => {
//   try {
//     const { from, to, amount } = req.body;
    
//     const response = await axios.get(`http://data.fixer.io/api/convert?access_key=YOUR_FIXER_API_KEY&from=${from}&to=${to}&amount=${amount}`);
    
//     res.json({
//       success: true,
//       data: {
//         from,
//         to,
//         amount,
//         result: response.data.result,
//         rate: response.data.info.rate
//       }
//     });
//   } catch (error) {
//     console.error('Currency conversion error:', error);
//     res.status(500).json({ success: false, message: 'Failed to convert currency' });
//   }
// };


const Currency = require("../models/currencyModel");

// Add Currency
exports.addCurrency = async (req, res) => {
  try {
    const { code, name, symbol } = req.body;
    const currency = new Currency({ code, name, symbol });
    await currency.save();
    res.status(201).json(currency);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Currencies
exports.getCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.json(currencies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Currency
exports.updateCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, name, symbol } = req.body;
    const currency = await Currency.findByIdAndUpdate(
      id,
      { code, name, symbol },
      { new: true }
    );
    res.json(currency);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Currency
exports.deleteCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    await Currency.findByIdAndDelete(id);
    res.json({ message: "Currency deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
