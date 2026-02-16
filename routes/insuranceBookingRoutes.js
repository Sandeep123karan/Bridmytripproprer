const router = require("express").Router();

const {
createBooking,
getBookings,
getBooking,
updatePayment,
deleteBooking
} = require("../controllers/insuranceBookingController");


// CREATE
router.post("/",createBooking);

// GET ALL
router.get("/",getBookings);

// GET SINGLE
router.get("/:id",getBooking);

// PAYMENT UPDATE
router.put("/payment/:id",updatePayment);

// DELETE
router.delete("/:id",deleteBooking);

module.exports = router;
