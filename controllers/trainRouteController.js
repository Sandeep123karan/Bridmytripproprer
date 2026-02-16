// // controllers/trainRouteController.js
// const TrainRoute = require("../models/TrainRoute");
// const axios = require("axios");

// exports.getLiveTrainRoute = async (req, res) => {
//   const { trainNo } = req.query;

//   try {
//     // ✅ Pehle DB check kar le
//     let existing = await TrainRoute.findOne({ trainNo });
//     if (existing) {
//       return res.json(existing);
//     }

//     // ✅ Agar DB me nahi mila to API call
//     const response = await axios.get(
//       `https://indianrailapi.com/api/v2/TrainSchedule/apikey/${process.env.RAIL_API_KEY}/TrainNumber/${trainNo}`
//     );

//     const data = response.data;

//     // ✅ DB me Save kar de
//     const newRoute = new TrainRoute({
//       trainNo: data.TrainNo,
//       trainName: data.TrainName,
//       source: { code: data.Route[0].StationCode, name: data.Route[0].StationName },
//       destination: {
//         code: data.Route[data.Route.length - 1].StationCode,
//         name: data.Route[data.Route.length - 1].StationName,
//       },
//       duration: data.Route[data.Route.length - 1].Day, // approx
//       route: data.Route.map((st) => ({
//         stationCode: st.StationCode,
//         stationName: st.StationName,
//         arrival: st.ArrivalTime,
//         departure: st.DepartureTime,
//         day: st.Day,
//         distance: st.Distance,
//       })),
//     });

//     await newRoute.save();
//     res.json(newRoute);

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// controllers/trainRouteController.js
const TrainRoute = require("../models/TrainRoute");
const axios = require("axios");

exports.getLiveTrainRoute = async (req, res) => {
  const { trainNo } = req.query;

  if (!trainNo) {
    return res.status(400).json({ error: "Train number is required" });
  }

  try {
    // 🔍 Step 1: Check in database
    const existing = await TrainRoute.findOne({ trainNo });

    if (existing) {
      return res.json(existing);
    }

    // 🌐 Step 2: Call Indian Rail API
    const apiURL = `https://indianrailapi.com/api/v2/TrainSchedule/apikey/${process.env.RAIL_API_KEY}/TrainNumber/${trainNo}`;

    const response = await axios.get(apiURL);
    const data = response.data;

    // ❗ Handle API errors
    if (!data || !data.Route || data.ResponseCode !== "200") {
      return res.status(404).json({ error: "Train not found or invalid API response" });
    }

    const route = data.Route;

    if (route.length === 0) {
      return res.status(404).json({ error: "No route available for this train" });
    }

    // 🕒 Step 3: Calculate duration in HH:MM format
    const first = route[0];
    const last = route[route.length - 1];

    const durationDays = last.Day - first.Day;
    const durationHours = Math.floor((last.Distance / 40) * 1.2); // approx
    const durationFormatted = `${durationDays} Day(s) ~ ${durationHours} hrs`;

    // 💾 Step 4: Save into DB
    const newRoute = await TrainRoute.create({
      trainNo: data.TrainNo,
      trainName: data.TrainName,
      source: { code: first.StationCode, name: first.StationName },
      destination: { code: last.StationCode, name: last.StationName },
      duration: durationFormatted,
      route: route.map((st) => ({
        stationCode: st.StationCode,
        stationName: st.StationName,
        arrival: st.ArrivalTime,
        departure: st.DepartureTime,
        day: st.Day,
        distance: st.Distance,
      })),
    });

    res.json(newRoute);

  } catch (error) {
    console.error("Train API Error:", error.message);

    return res.status(500).json({ error: "Failed to fetch train route" });
  }
};
