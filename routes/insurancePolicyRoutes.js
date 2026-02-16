const router = require("express").Router();

const {
    createPolicy,
    getPolicies,
    deletePolicy,
    updatePolicy
} = require("../controllers/insurancePolicyController");


router.post("/", createPolicy);

router.get("/", getPolicies);

router.delete("/:id", deletePolicy);

router.put("/:id", updatePolicy);

module.exports = router;
