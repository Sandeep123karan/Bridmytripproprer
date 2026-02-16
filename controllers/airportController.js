const axios = require("axios");
const Airport = require("../models/Airport");

// GET /api/airports
exports.getAllAirports = async (req, res) => {
  try {
    const airports = await Airport.find().sort({ airportName: 1 });
    res.json(airports);
  } catch (err) {
    console.error("❌ Error fetching airports:", err);
    res.status(500).json({ message: "Failed to fetch airport list" });
  }
};

// GET /api/airports/seed
exports.seedAirports = async (req, res) => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json");
    const data = Object.values(response.data);

    const cleaned = data
      .map((a) => ({
        airportCode: a.iata || '',
        airportName: a.name || '',
        cityCode: a.city || '',
        countryName: a.country || '',
        countryCode: a.iso || '',
        lat: a.lat || '',
        lon: a.lon || ''
      }))
      .filter((a) => a.airportCode); // skip records without IATA

    await Airport.deleteMany(); // clear old
    const result = await Airport.insertMany(cleaned);

    res.json({ message: `${result.length} airports inserted.` });
  } catch (err) {
    console.error("❌ Error seeding airports:", err);
    res.status(500).json({ message: "Failed to seed airports" });
  }
};
