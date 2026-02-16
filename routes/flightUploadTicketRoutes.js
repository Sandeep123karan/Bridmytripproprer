const express = require("express");
const router = express.Router();

const {
  createTicket,
  getTickets,
  updateTicket,
  deleteTicket
} = require("../controllers/flightUploadTicketController");

router.post("/", createTicket);
router.get("/", getTickets);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
