const express = require("express");
const router = express.Router();
const controller = require("../controllers/propertyTypeController");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.patch("/status/:id", controller.changeStatus);

module.exports = router;
