const axios = require("axios");

const fetchGlobalHotels = async (req, res) => {
  try {
    const { cityCode = "PAR" } = req.query;

    const tokenRes = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", null, {
      params: {
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_CLIENT_ID,
        client_secret: process.env.AMADEUS_CLIENT_SECRET,
      },
    });

    const token = tokenRes.data.access_token;

    const response = await axios.get(
      `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch hotel data", error: err.message });
  }
};

module.exports = { fetchGlobalHotels };
