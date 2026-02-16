const express = require("express");
const router = express.Router();
const { importTicket } = require("../controllers/ticketController");

router.post("/import", importTicket);

module.exports = router;
