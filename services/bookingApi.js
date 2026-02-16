const axios = require("axios");

const API_BASE = "https://distribution-xml.booking.com/demand"; // Example base

// 🔑 Yaha pe apna Booking.com ka API key dalna
const API_KEY = process.env.BOOKING_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  }
});

module.exports = apiClient;
