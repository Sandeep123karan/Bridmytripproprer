const OnlineTransaction = require("../models/onlineTransactionModel");

exports.createTransaction = async (req, res) => {
  try {
    const transaction = new OnlineTransaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await OnlineTransaction.find().sort({ createdDate: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
