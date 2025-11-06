const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Account = require('../models/account.model');
const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });

const seedFinanceData = async () => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected for finance seeding.');

        // Clear existing data
        await Account.deleteMany({}).session(session);
        await Transaction.deleteMany({}).session(session);
        console.log('Cleared existing accounts and transactions.');

        // --- Seed Chart of Accounts ---
        const initialAccounts = [
            // Assets
            { accountId: '1010', name: 'Petty Cash', type: 'Asset', balance: 5000 },
            { accountId: '1020', name: 'Main Bank Account', type: 'Asset', balance: 150000 },
            { accountId: '1210', name: 'Accounts Receivable', type: 'Asset', balance: 0 },
            // Liabilities
            { accountId: '2010', name: 'Accounts Payable', type: 'Liability', balance: 0 },
            // Equity
            { accountId: '3010', name: 'Owner\'s Equity', type: 'Equity', balance: 155000 },
            // Income
            { accountId: '4010', name: 'Tuition Fee Income', type: 'Income', balance: 0 },
            // Expenses
            { accountId: '5010', name: 'Salaries Expense', type: 'Expense', balance: 0 },
            { accountId: '5020', name: 'Utilities Expense', type: 'Expense', balance: 0 },
        ];
        
        await Account.insertMany(initialAccounts, { session });
        console.log(`${initialAccounts.length} accounts seeded.`);

        // --- Seed Transactions ---
        // Find admin user to be the creator of transactions
        const adminUser = await User.findOne({ role: 'admin' }).session(session);
        if (!adminUser) {
            throw new Error('Admin user not found. Please seed admin first.');
        }

        // Find accounts for transactions
        const bankAccount = await Account.findOne({ accountId: '1020' }).session(session);
        const salariesAccount = await Account.findOne({ accountId: '5010' }).session(session);
        const utilitiesAccount = await Account.findOne({ accountId: '5020' }).session(session);

        if (!bankAccount || !salariesAccount || !utilitiesAccount) {
            throw new Error('One or more accounts not found for seeding transactions.');
        }

        const initialTransactions = [
            {
                fromAccount: bankAccount._id,
                toAccount: salariesAccount._id,
                amount: 15000,
                description: 'September salaries payment.',
                createdBy: adminUser._id
            },
            {
                fromAccount: bankAccount._id,
                toAccount: utilitiesAccount._id,
                amount: 850,
                description: 'September utility bills.',
                createdBy: adminUser._id
            },
        ];

        // Manually adjust balances based on transactions as the controller would
        bankAccount.balance -= 15000;
        salariesAccount.balance += 15000;
        
        bankAccount.balance -= 850;
        utilitiesAccount.balance += 850;

        await Transaction.insertMany(initialTransactions, { session });
        await bankAccount.save({ session });
        await salariesAccount.save({ session });
        await utilitiesAccount.save({ session });

        console.log(`${initialTransactions.length} transactions seeded.`);

        await session.commitTransaction();
        console.log('Finance data seeded successfully!');

    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        console.error('Error seeding finance data:', error);
    } finally {
        session.endSession();
        await mongoose.disconnect();
        console.log('MongoDB disconnected.');
    }
};

const runSeed = async () => {
    await seedFinanceData();
    process.exit();
}

runSeed();