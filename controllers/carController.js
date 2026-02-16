// const Car = require("../models/carModel");

// // Create
// exports.addCar = async (req, res) => {
//   try {
//     const car = new Car(req.body);
//     await car.save();
//     res.status(201).json(car);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get All
// exports.getAllCars = async (req, res) => {
//   try {
//     const cars = await Car.find();
//     res.status(200).json(cars);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete
// exports.deleteCar = async (req, res) => {
//   try {
//     await Car.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Car deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const Car = require("../models/carModel");
const apiClient = require("../services/bookingApi");

// 🔍 Search cars
exports.searchCars = async (req, res) => {
  try {
    const { pickup, dropoff, dateFrom, dateTo } = req.body;

    const response = await apiClient.post("/api/cars/search", {
      pickup,
      dropoff,
      dateFrom,
      dateTo
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🏬 Get depots
exports.getDepots = async (req, res) => {
  try {
    const response = await apiClient.get("/api/cars/depots");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📊 Depot Reviews
exports.getDepotReviews = async (req, res) => {
  try {
    const response = await apiClient.get("/api/cars/depots/reviews/scores");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🚗 Car Details
exports.getCarDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await apiClient.get(`/api/cars/details/${id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🏢 Suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const response = await apiClient.get("/api/cars/suppliers");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⚙️ Constants
exports.getConstants = async (req, res) => {
  try {
    const response = await apiClient.get("/api/cars/constants");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
