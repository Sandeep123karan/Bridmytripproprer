// const axios = require("axios");
// const Airline = require("../models/airlineModel");

// exports.seedAirlines = async (req, res) => {
//   try {
//     const response = await axios.get("https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat");
//     const lines = response.data.split("\n");

//     const airlines = lines
//       .map(line => line.split(","))
//       .filter(a => a.length > 6 && a[3] !== "\\N")
//       .map(a => ({
//         airlineName: a[1].replace(/"/g, ""),
//         airlineCode: a[3].replace(/"/g, ""),
//         callsign: a[4].replace(/"/g, ""),
//         country: a[6].replace(/"/g, ""),
//         airlineImage: `https://content.airhex.com/content/logos/airlines_${a[3].replace(/"/g, "")}_200_200_s.png`
//       }));

//     await Airline.deleteMany(); // optional: clear existing
//     const inserted = await Airline.insertMany(airlines);
//     res.json({ message: `Seeded ${inserted.length} airlines` });
//   } catch (err) {
//     console.error("❌ Seeding failed:", err.message);
//     res.status(500).json({ message: "Failed to seed airlines" });
//   }
// };
