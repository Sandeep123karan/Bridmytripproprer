const PNR = require("../models/pnrModel");

// 🔍 Fake PNR Checker (demo purpose)
function generateFakePNR(pnr) {
  return {
    pnr,
    trainNo: "12423",
    trainName: "Rajdhani Express",
    journeyDate: "2025-05-10",
    chartStatus: "NOT PREPARED",
    passengers: [
      {
        name: "Passenger 1",
        age: "24",
        gender: "M",
        bookingStatus: "WL 15",
        currentStatus: "WL 10",
      },
      {
        name: "Passenger 2",
        age: "22",
        gender: "F",
        bookingStatus: "WL 16",
        currentStatus: "WL 11",
      }
    ]
  };
}

// GET PNR STATUS
exports.checkPNR = async (req, res) => {
  try {
    const { pnr } = req.params;
    if (!pnr || pnr.length !== 10)
      return res.status(400).json({ message: "Invalid PNR number" });

    let record = await PNR.findOne({ pnr });

    if (!record) {
      record = await PNR.create(generateFakePNR(pnr));
    }

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
