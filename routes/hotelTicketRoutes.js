const express = require("express");
const router = express.Router();
const {
  createHotelTicket,
  getHotelTickets,
  updateHotelTicket,
  deleteHotelTicket
} = require("../controllers/hotelTicketController");

router.post("/", createHotelTicket);
router.get("/", getHotelTickets);
router.put("/:id", updateHotelTicket);
router.delete("/:id", deleteHotelTicket);

module.exports = router;
