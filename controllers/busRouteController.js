// const BusRoute = require("../models/BusRoute");

// exports.getRoutes = async (req, res) => {
//   try {
//     const routes = await BusRoute.find();
//     res.json(routes);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.addRoute = async (req, res) => {
//   try {
//     const route = new BusRoute(req.body);
//     await route.save();
//     res.status(201).json(route);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.updateRoute = async (req, res) => {
//   try {
//     const route = await BusRoute.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(route);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.deleteRoute = async (req, res) => {
//   try {
//     await BusRoute.findByIdAndDelete(req.params.id);
//     res.json({ message: "Route deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const BusRoute = require("../models/BusRoute");

// GET with search
exports.getRoutes = async (req, res) => {
  try {
    const q = req.query.q || "";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const filter = q
      ? {
          $or: [
            { fromCity: new RegExp(q, "i") },
            { toCity: new RegExp(q, "i") }
          ]
        }
      : {};

    const total = await BusRoute.countDocuments(filter);

    const routes = await BusRoute.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ items: routes, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add Route
exports.addRoute = async (req, res) => {
  try {
    const route = new BusRoute(req.body);
    await route.save();
    res.status(201).json(route);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Route
exports.updateRoute = async (req, res) => {
  try {
    const route = await BusRoute.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(route);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Route
exports.deleteRoute = async (req, res) => {
  try {
    await BusRoute.findByIdAndDelete(req.params.id);
    res.json({ message: "Route deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
