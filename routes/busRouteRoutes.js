
// const express = require("express");
// const router = express.Router();
// const { getRoutes, addRoute, updateRoute, deleteRoute } = require("../controllers/busRouteController");

// router.get("/", getRoutes);
// router.post("/", addRoute);
// router.put("/:id", updateRoute);
// router.delete("/:id", deleteRoute);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  getRoutes,
  addRoute,
  updateRoute,
  deleteRoute
} = require("../controllers/busRouteController");

router.get("/", getRoutes);
router.post("/", addRoute);
router.put("/:id", updateRoute);
router.delete("/:id", deleteRoute);

module.exports = router;
