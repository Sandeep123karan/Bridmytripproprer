const BankAccount = require('../models/bankAccountModel');

const getAccounts = async (req, res) => {
  try {
    const accounts = await BankAccount.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bank accounts" });
  }
};

const addAccount = async (req, res) => {
  try {
    const newAccount = new BankAccount(req.body);
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: "Failed to add account", error: err.message });
  }
};

module.exports = { getAccounts, addAccount };
