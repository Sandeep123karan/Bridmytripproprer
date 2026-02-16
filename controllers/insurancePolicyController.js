const InsurancePolicy = require("../models/InsurancePolicy");


// ✅ CREATE
exports.createPolicy = async (req, res) => {
    try {

        const policy = await InsurancePolicy.create(req.body);

        res.status(201).json(policy);

    } catch (error) {

        console.log("CREATE ERROR:", error);
        res.status(500).json(error.message);
    }
};



// ✅ GET ALL
exports.getPolicies = async (req, res) => {

    try {

        const policies = await InsurancePolicy
            .find()
            .sort({ createdAt: -1 });

        res.json(policies);

    } catch (error) {

        console.log("FETCH ERROR:", error);
        res.status(500).json(error.message);
    }
};



// ✅ DELETE
exports.deletePolicy = async (req, res) => {

    try {

        await InsurancePolicy.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Deleted Successfully"
        });

    } catch (error) {

        console.log("DELETE ERROR:", error);
        res.status(500).json(error.message);
    }
};



// ✅ UPDATE
exports.updatePolicy = async (req, res) => {

    try {

        const updated = await InsurancePolicy.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updated);

    } catch (error) {

        console.log("UPDATE ERROR:", error);
        res.status(500).json(error.message);
    }
};
