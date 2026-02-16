const AgentPayment = require("../models/AgentPayment");

exports.getPayments = async (req, res) => {
  try {
    const { key, value, fromDate, toDate } = req.query;

    let filter = {};
    if (key && value) filter[key] = new RegExp(value, "i");
    if (fromDate && toDate) {
      filter.paymentDate = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate)
      };
    }

    const payments = await AgentPayment.find(filter).sort({ paymentDate: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
