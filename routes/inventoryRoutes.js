// const express = require("express");
// const router = express.Router();
// const {
//   createInventory,
//   getInventories,
//   deleteInventory,
// } = require("../controllers/inventoryController");

// router.post("/", createInventory);
// router.get("/", getInventories);
// router.delete("/:id", deleteInventory);
 
// // routes/inventoryRoutes.js
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Update failed" });
//   }
// });


// module.exports = router;
const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventoryModel"); // ✅ Required for PUT route

const {
  createInventory,
  getInventories,
  deleteInventory,
} = require("../controllers/inventoryController");

// CRUD Routes
router.post("/", createInventory);
router.get("/", getInventories);
router.delete("/:id", deleteInventory);

// ✅ PUT route to update inventory
router.put("/:id", async (req, res) => {
  try {
    const updated = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
