// // const express = require("express");
// // const router = express.Router();
// // const controller = require("../controllers/visaApplicationController");

// // router.post("/", controller.createVisaApplication);
// // router.get("/", controller.getAllVisaApplications);
// // router.get("/:id", controller.getVisaApplication);
// // router.put("/:id", controller.updateVisaApplication);
// // router.delete("/:id", controller.deleteVisaApplication);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/visaApplicationController");

// router.post("/", controller.createVisaApplication);
// router.get("/", controller.getAllVisaApplications);
// router.get("/:id", controller.getVisaApplication);
// router.put("/:id", controller.updateVisaApplication);
// router.delete("/:id", controller.deleteVisaApplication);

// module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/visaApplicationController");

router.post("/", controller.createVisaApplication);
router.get("/", controller.getAllVisaApplications);
router.get("/:id", controller.getVisaApplication);
router.put("/:id", controller.updateVisaApplication);
router.delete("/:id", controller.deleteVisaApplication);

module.exports = router;
