const mongoose = require('mongoose');
const Account = require('../models/account.model');
const Transaction = require('../models/transaction.model');

// @desc    Create a new financial account
// @route   POST /api/finance/accounts
// @access  Private (finance_write)
const createAccount = async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.save();
        res.status(201).json(account);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all financial accounts (Chart of Accounts)
// @route   GET /api/finance/accounts
// @access  Private (finance_read)
const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find({}).sort({ accountId: 1 });
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Transfer funds between accounts
// @route   POST /api/finance/transfer
// @access  Private (finance_write)
const createTransfer = async (req, res) => {
    const { fromAccount, toAccount, amount, description } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const fromAcc = await Account.findById(fromAccount).session(session);
        const toAcc = await Account.findById(toAccount).session(session);

        if (!fromAcc || !toAcc) {
            throw new Error('One or both accounts not found.');
        }

        if (fromAcc.balance < amount) {
            throw new Error('Insufficient funds in the source account.');
        }

        fromAcc.balance -= amount;
        toAcc.balance += amount;

        await fromAcc.save({ session });
        await toAcc.save({ session });

        const transaction = new Transaction({
            fromAccount,
            toAccount,
            amount,
            description,
            createdBy: req.user._id,
            date: new Date(),
        });
        await transaction.save({ session });

        await session.commitTransaction();
        res.status(200).json({ message: 'Transfer successful', transaction });

    } catch (error) {
        await session.abortTransaction();
        res.status(400).json({ message: error.message });
    } finally {
        session.endSession();
    }
};

// @desc    Get balance sheet
// @route   GET /api/finance/balancesheet
// @access  Private (finance_read)
const getBalanceSheet = async (req, res) => {
    try {
        const [assets, liabilities, equityAccounts, incomes, expenses] = await Promise.all([
            Account.find({ type: 'Asset' }),
            Account.find({ type: 'Liability' }),
            Account.find({ type: 'Equity' }),
            Account.find({ type: 'Income' }),
            Account.find({ type: 'Expense' })
        ]);

        const totalAssets = assets.reduce((sum, acc) => sum + acc.balance, 0);
        const totalLiabilities = liabilities.reduce((sum, acc) => sum + acc.balance, 0);
        
        const openingEquity = equityAccounts.reduce((sum, acc) => sum + acc.balance, 0);
        const totalIncome = incomes.reduce((sum, acc) => sum + acc.balance, 0);
        const totalExpense = expenses.reduce((sum, acc) => sum + acc.balance, 0);
        
        const netIncome = totalIncome - totalExpense;
        const totalEquity = openingEquity + netIncome;

        res.json({
            assets: { accounts: assets, total: totalAssets },
            liabilities: { accounts: liabilities, total: totalLiabilities },
            equity: { accounts: equityAccounts, openingBalance: openingEquity, netIncome, total: totalEquity },
            check: totalAssets - (totalLiabilities + totalEquity)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get cash report (account statement)
// @route   GET /api/finance/cash-report
// @access  Private (finance_read)
const getCashReport = async (req, res) => {
    const { account: accountId } = req.query;
    if (!accountId) {
        return res.status(400).json({ message: 'Account ID is required.' });
    }

    try {
        const transactions = await Transaction.find({
            $or: [{ fromAccount: accountId }, { toAccount: accountId }]
        })
        .populate('fromAccount', 'name accountId')
        .populate('toAccount', 'name accountId')
        .sort({ date: 'asc' });

        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get trial balance
// @route   GET /api/finance/trial-balance
// @access  Private (finance_read)
const getTrialBalance = async (req, res) => {
    const { date } = req.query;
    const endDate = date ? new Date(date) : new Date();
    // Set to end of day
    endDate.setHours(23, 59, 59, 999);

    try {
        const accounts = await Account.find({});
        let trialBalance = [];
        let totalDebit = 0;
        let totalCredit = 0;

        for (const account of accounts) {
            // Note: This logic assumes a starting balance of 0 for all accounts at the beginning of time.
            // A more complex system would handle opening balances.
            const debitResult = await Transaction.aggregate([
                { $match: { toAccount: account._id, date: { $lte: endDate } } },
                { $group: { _id: null, total: { $sum: '$amount' } } }
            ]);
            const creditResult = await Transaction.aggregate([
                { $match: { fromAccount: account._id, date: { $lte: endDate } } },
                { $group: { _id: null, total: { $sum: '$amount' } } }
            ]);

            const debit = debitResult[0]?.total || 0;
            const credit = creditResult[0]?.total || 0;
            
            let balance = debit - credit;
            let debitBalance = 0;
            let creditBalance = 0;

            if (['Asset', 'Expense'].includes(account.type)) {
                if (balance > 0) debitBalance = balance;
                else creditBalance = -balance;
            } else { // Liability, Equity, Income
                if (balance < 0) creditBalance = -balance;
                else debitBalance = balance;
            }

            if (debitBalance > 0 || creditBalance > 0) {
                trialBalance.push({ 
                    accountName: account.name, 
                    accountId: account.accountId, 
                    debit: debitBalance, 
                    credit: creditBalance 
                });
                totalDebit += debitBalance;
                totalCredit += creditBalance;
            }
        }
        
        res.json({
            trialBalance,
            totals: {
                debit: totalDebit,
                credit: totalCredit
            },
            inBalance: Math.abs(totalDebit - totalCredit) < 0.01, // Use tolerance for floats
            asOf: endDate
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAccount,
    getAccounts,
    createTransfer,
    getBalanceSheet,
    getCashReport,
    getTrialBalance
};