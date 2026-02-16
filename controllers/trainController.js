// // const axios = require("axios");
// // const Train = require("../models/Train");

// // exports.getTrains = async (req, res) => {
// //   const { from, to, datetime, convenience = 50 } = req.query;
// //   const token = process.env.NAVITIA_TOKEN;

// //   if (!from || !to || !datetime) {
// //     return res.status(400).json({ message: "Missing required query parameters: from, to, datetime" });
// //   }

// //   try {
// //     const url = `https://api.navitia.io/v1/coverage/sandbox/journeys?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&datetime=${datetime}`;

// //     const response = await axios.get(url, {
// //       headers: { Authorization: token },
// //     });

// //     if (!response.data.journeys || response.data.journeys.length === 0) {
// //       return res.status(404).json({ message: "No journeys found. Check date or location codes." });
// //     }

// //     const journeys = response.data.journeys;

// //     const trains = await Promise.all(
// //       journeys.map(async (j) => {
// //         const train = new Train({
// //           origin: j.from.name,
// //           destination: j.to.name,
// //           departure_time: j.departure_date_time,
// //           arrival_time: j.arrival_date_time,
// //           duration: j.duration,
// //           fare: 0,
// //           convenience_fee: parseFloat(convenience),
// //           total_fare: parseFloat(convenience),
// //         });
// //         await train.save();
// //         return train;
// //       })
// //     );

// //     res.json(trains);
// //   } catch (err) {
// //     console.error("❌ Navitia API error:", err.response?.data || err.message);
// //     res.status(500).json({ message: "API fetch failed", error: err.response?.data || err.message });
// //   }
// // };


// const axios = require('axios');
// const Train = require('../models/Train');
// const TrainBooking = require('../models/TrainBooking');

// // Get train routes using Indian Railways API
// const getTrainRoutes = async (req, res) => {
//   try {
//     // Using RailwayAPI (Free tier available)
//     const response = await axios.get('https://indianrailapi.com/api/v2/AllStation/apikey/0cc85e8fa9be34a0b0ac4dc5bdbed9b5/');
    
//     // Transform API data to our format
//     const stations = response.data.Station.map(station => ({
//       stationCode: station.StationCode,
//       stationName: station.StationName
//     }));

//     res.json({
//       success: true,
//       data: stations
//     });
//   } catch (error) {
//     console.error('Train routes API error:', error);
//     res.status(500).json({ success: false, message: 'Failed to fetch train routes' });
//   }
// };

// // Search trains between stations
// const searchTrains = async (req, res) => {
//   try {
//     const { from, to, date } = req.query;
    
//     // Using IRCTC API (You'll need to register for API key)
//     const response = await axios.get(`https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/0cc85e8fa9be34a0b0ac4dc5bdbed9b5/From/${from}/To/${to}/`);
    
//     const trains = response.data.Train.map(train => ({
//       trainNumber: train.TrainNo,
//       trainName: train.TrainName,
//       source: train.Source,
//       destination: train.Destination,
//       departureTime: train.DepartureTime,
//       arrivalTime: train.ArrivalTime,
//       runningDays: train.RunningDays.split(''),
//       classes: train.Class || []
//     }));

//     res.json({
//       success: true,
//       data: trains
//     });
//   } catch (error) {
//     console.error('Train search API error:', error);
//     res.status(500).json({ success: false, message: 'Failed to search trains' });
//   }
// };

// // Get PNR status
// const getPNRStatus = async (req, res) => {
//   try {
//     const { pnr } = req.params;
    
//     const response = await axios.get(`https://indianrailapi.com/api/v2/PNRCheck/apikey/0cc85e8fa9be34a0b0ac4dc5bdbed9b5/PNRNumber/${pnr}/`);
    
//     res.json({
//       success: true,
//       data: response.data
//     });
//   } catch (error) {
//     console.error('PNR status API error:', error);
//     res.status(500).json({ success: false, message: 'Failed to fetch PNR status' });
//   }
// };

// // Book train ticket
// const bookTrain = async (req, res) => {
//   try {
//     const bookingData = req.body;
    
//     // Generate PNR
//     const pnr = 'PNR' + Math.random().toString(36).substr(2, 10).toUpperCase();
    
//     const booking = new TrainBooking({
//       ...bookingData,
//       pnr
//     });
    
//     await booking.save();
    
//     res.json({
//       success: true,
//       data: booking,
//       message: 'Train booked successfully'
//     });
//   } catch (error) {
//     console.error('Train booking error:', error);
//     res.status(500).json({ success: false, message: 'Failed to book train' });
//   }
// };