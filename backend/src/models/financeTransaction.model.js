const mongoose = require('mongoose');

const financeTransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

// Add index on date for faster range queries
financeTransactionSchema.index({ date: 1 });

const FinanceTransaction = mongoose.model('FinanceTransaction', financeTransactionSchema);

module.exports = FinanceTransaction;