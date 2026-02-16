const express = require("express");
const router = express.Router();
const visaController = require("../controllers/visaCountryController");

router.get("/", visaController.getAll);
router.get("/:id", visaController.getOne);
router.post("/", visaController.create);
router.put("/:id", visaController.update);
router.delete("/:id", visaController.remove);
router.post("/:id/policy", visaController.upsertPolicy);

module.exports = router;
