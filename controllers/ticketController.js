const Ticket = require("../models/ticketModel");

exports.importTicket = async (req, res) => {
  const { companyName, apiSupplier, issueSupplier, pnr, lastName } = req.body;

  if (!companyName || !apiSupplier || !issueSupplier || !pnr || !lastName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newTicket = new Ticket({ companyName, apiSupplier, issueSupplier, pnr, lastName });
    await newTicket.save();
    res.json({ message: "Ticket Imported Successfully" });
  } catch (err) {
    console.error("❌ Ticket Import Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
