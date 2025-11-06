const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  fromAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  toAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: [0.01, 'Transaction amount must be positive.'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true });

transactionSchema.index({ date: -1 });
transactionSchema.index({ fromAccount: 1 });
transactionSchema.index({ toAccount: 1 });

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;