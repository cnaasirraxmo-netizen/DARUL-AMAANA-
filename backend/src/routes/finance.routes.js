const express = require('express');
const router = express.Router();
const financeController = require('../controllers/finance.controller');
const { auth, requirePermission } = require('../middleware/auth');

// --- Write Routes (requires 'finance_write' permission) ---
router.post('/accounts', auth, requirePermission('finance_write'), financeController.createAccount);
router.post('/transfer', auth, requirePermission('finance_write'), financeController.createTransfer);

// --- Read Routes (requires 'finance_read' permission) ---
router.get('/accounts', auth, requirePermission('finance_read'), financeController.getAccounts);
router.get('/chart-of-accounts', auth, requirePermission('finance_read'), financeController.getAccounts);
router.get('/balancesheet', auth, requirePermission('finance_read'), financeController.getBalanceSheet);
router.get('/cash-report', auth, requirePermission('finance_read'), financeController.getCashReport);
router.get('/trial-balance', auth, requirePermission('finance_read'), financeController.getTrialBalance);

module.exports = router;