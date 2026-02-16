const express = require("express");
const { checkPNR } = require("../controllers/pnrController");

const router = express.Router();

router.get("/:pnr", checkPNR);

module.exports = router;
