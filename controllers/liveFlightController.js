// const Fare = require('../models/flightFareModel');

// const getFares = async (req, res) => {
//   try {
//     const fares = await Fare.find().sort({ createdAt: -1 });
//     res.json(fares);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching fares' });
//   }
// };

// const addFare = async (req, res) => {
//   const { supplierFareType, apiFareType, apiSupplier } = req.body;
//   try {
//     const newFare = new Fare({ supplierFareType, apiFareType, apiSupplier });
//     await newFare.save();
//     res.status(201).json(newFare);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding fare' });
//   }
// };

// const updateFare = async (req, res) => {
//   const { id } = req.params;
//   const { supplierFareType, apiFareType, apiSupplier } = req.body;
//   try {
//     const updatedFare = await Fare.findByIdAndUpdate(
//       id,
//       { supplierFareType, apiFareType, apiSupplier },
//       { new: true }
//     );
//     res.json(updatedFare);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating fare' });
//   }
// };

// const deleteFare = async (req, res) => {
//   try {
//     await Fare.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Fare deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting fare' });
//   }
// };

// module.exports = { getFares, addFare, updateFare, deleteFare };
// controllers/liveFlightController.js
// const axios = require('axios');
// const LiveFlight = require('../models/LiveFlight');

// const getLiveFlights = async (req, res) => {
//   try {
//     const { origin, destination } = req.query;

//     if (!origin || !destination) {
//       return res.status(400).json({ message: 'Origin and destination are required' });
//     }

//     const API_KEY = process.env.AVIATIONSTACK_KEY;
//     const response = await axios.get('http://api.aviationstack.com/v1/flights', {
//       params: {
//         access_key: API_KEY,
//         dep_iata: origin,
//         arr_iata: destination
//       }
//     });

//     const flights = response.data.data || [];
//     const result = [];

//     for (const flight of flights) {
//       const airline = flight.airline?.name || 'Unknown';
//       const dep_time = flight.departure?.scheduled || 'N/A';
//       const arr_time = flight.arrival?.scheduled || 'N/A';

//       // Dummy fare logic (use real API in production)
//       const baseFare = Math.floor(Math.random() * 5000 + 2000);
//       const tax = Math.floor(baseFare * 0.15);
//       const convenienceFee = 150;
//       const totalFare = baseFare + tax + convenienceFee;

//       const entry = new LiveFlight({
//         airline,
//         origin,
//         destination,
//         departure_time: dep_time,
//         arrival_time: arr_time,
//         baseFare,
//         tax,
//         convenienceFee,
//         totalFare
//       });

//       await entry.save();
//       result.push(entry);
//     }

//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching live flight data' });
//   }
// };

// module.exports = { getLiveFlights };

const axios = require("axios");
const LiveFlight = require("../models/LiveFlight");
const ConvenienceFee = require("../models/convenienceFeeModel");
const getLiveFlights = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const API_KEY = process.env.AVIATIONSTACK_KEY;
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`;
    
    const response = await axios.get(apiUrl);
    const flights = response.data.data;

    const results = [];

    for (const flight of flights) {
      const airline = flight.airline?.name || "";
      const originAirport = flight.departure?.iata || "";
      const destAirport = flight.arrival?.iata || "";
      const dep_time = flight.departure?.scheduled || "";
      const arr_time = flight.arrival?.scheduled || "";

      if (!airline || !dep_time || !arr_time || !originAirport || !destAirport) continue;

      // Only include matching origin/destination
      if (
        (origin && originAirport !== origin.toUpperCase()) ||
        (destination && destAirport !== destination.toUpperCase())
      ) continue;

      // Dummy base fare + tax
      const baseFare = Math.floor(Math.random() * 10000) + 1000;
      const tax = Math.floor(baseFare * 0.18);

      const fareType = "Economy"; // Default or dynamic based on your use case

      // ✅ Fetch correct convenience fee using airline + fareType
      const feeData = await ConvenienceFee.findOne({ airline, fareType });

      let convenienceFeeValue = 0;
      let convenienceFeeType = null;

      if (feeData) {
        convenienceFeeType = feeData.feeType;
        if (feeData.feeType === "Fixed") {
          convenienceFeeValue = feeData.value;
        } else if (feeData.feeType === "Percentage") {
          convenienceFeeValue = ((baseFare + tax) * feeData.value) / 100;
        }
      }

      const totalFare = baseFare + tax + convenienceFeeValue;

      const entry = new LiveFlight({
        airline,
        origin: originAirport,
        destination: destAirport,
        departure_time: dep_time,
        arrival_time: arr_time,
        baseFare,
        tax,
        convenienceFeeType,
        convenienceFeeValue,
        totalFare,
      });

      await entry.save();
      results.push(entry);
    }

    res.json(results);
  } catch (err) {
    console.error("Live Flights Error:", err.message);
    res.status(500).json({ message: "Error fetching live flights", error: err.message });
  }
};

// const getLiveFlights = async (req, res) => {
//   try {
//     const { origin, destination } = req.query;
//     const API_KEY = process.env.AVIATIONSTACK_KEY;

//     const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`;
//     const response = await axios.get(apiUrl);
//     const flights = response.data.data;

//     const results = [];
//     for (const flight of flights) {
//       const airline = flight.airline?.name || "";
//       const originAirport = flight.departure?.iata || "";
//       const destAirport = flight.arrival?.iata || "";
//       const dep_time = flight.departure?.scheduled || "";
//       const arr_time = flight.arrival?.scheduled || "";

//       if (!airline || !dep_time || !arr_time || !originAirport || !destAirport) continue;

//       // If origin & destination passed, only push matching
//       if (
//         (origin && originAirport !== origin.toUpperCase()) ||
//         (destination && destAirport !== destination.toUpperCase())
//       ) {
//         continue;
//       }

//       // Dummy baseFare/tax
//       const baseFare = Math.floor(Math.random() * 10000) + 1000;
//       const tax = Math.floor(baseFare * 0.18);

//       // Get convenience fee
//       const feeData = await ConvenienceFee.findOne({ airline });
//       let convenienceFee = 0;
//       if (feeData) {
//         if (feeData.feeType === "Fixed") convenienceFee = feeData.value;
//         else if (feeData.feeType === "Percentage") convenienceFee = ((baseFare + tax) * feeData.value) / 100;
//       }

//       const totalFare = baseFare + tax + convenienceFee;

//       const entry = new LiveFlight({
//         airline,
//         origin: originAirport,
//         destination: destAirport,
//         departure_time: dep_time,
//         arrival_time: arr_time,
//         baseFare,
//         tax,
//         convenienceFeeType: feeData?.feeType || "Fixed",
//         convenienceFeeValue: feeData?.value || 0,
//         totalFare,
//       });
//       await entry.save();
//       results.push(entry);
//     }
//     res.json(results);
//   } catch (err) {
//     console.error("Live Flights Error:", err.message);
//     res.status(500).json({ message: "Error fetching live flights", error: err.message });
//   }
// };

// const getAllFlights = async (req, res) => {
//   try {
//     const flights = await LiveFlight.find().sort({ createdAt: -1 });
//     res.json(flights);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching saved flights" });
//   }
// };
const getAllFlights = async (req, res) => {
  try {
    const flights = await LiveFlight.find().sort({ createdAt: -1 });

    const updatedFlights = await Promise.all(
      flights.map(async (flight) => {
        const airline = flight.airline;
        const fareType = "Economy"; // default, or change based on your logic

        const feeData = await ConvenienceFee.findOne({ airline, fareType });

        let convenienceFeeType = flight.convenienceFeeType;
        let convenienceFeeValue = flight.convenienceFeeValue;

        if (feeData) {
          convenienceFeeType = feeData.feeType;
          convenienceFeeValue = feeData.value;
        }

        return {
          ...flight._doc, // spread original flight fields
          convenienceFeeType,
          convenienceFeeValue
        };
      })
    );

    res.json(updatedFlights);
  } catch (err) {
    console.error("Error fetching saved flights:", err);
    res.status(500).json({ message: "Error fetching saved flights" });
  }
};


module.exports = { getLiveFlights, getAllFlights };
