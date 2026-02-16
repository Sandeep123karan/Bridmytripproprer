const express = require("express");
const { getLiveTrainRoute } = require("../controllers/trainRouteController");
const router = express.Router();

router.get("/route", getLiveTrainRoute);

module.exports = router;
