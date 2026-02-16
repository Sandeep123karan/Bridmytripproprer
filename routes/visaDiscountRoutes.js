const express = require("express");
const router = express.Router();
const controller = require("../controllers/visaDiscountController");

router.get("/", controller.getDiscounts);          // GET ALL
router.get("/:id", controller.getDiscount);        // GET ONE
router.post("/", controller.createDiscount);       // POST
router.put("/:id", controller.updateDiscount);     // UPDATE
router.delete("/:id", controller.deleteDiscount);  // DELETE

module.exports = router;
