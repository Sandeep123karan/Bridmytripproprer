// const express = require("express");
// const router = express.Router();
// const {
//   getAllSuppliers,
//   createSupplier,
//   updateSupplierStatus
// } = require("../controllers/supplierController");

// router.get("/", getAllSuppliers);
// router.post("/", createSupplier);
// router.put("/:id", updateSupplierStatus);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  getAllSuppliers,
  createSupplier,
  updateSupplierStatus,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

router.get("/", getAllSuppliers);
router.post("/", createSupplier);
router.put("/status/:id", updateSupplierStatus);
router.put("/:id", updateSupplier);           // <-- Edit supplier
router.delete("/:id", deleteSupplier);        // <-- Delete supplier

module.exports = router;
