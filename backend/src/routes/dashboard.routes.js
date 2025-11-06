const express = require('express');
const router = express.Router();
const { getSummary, getQuickActions } = require('../controllers/dashboard.controller');
const { auth, requireRole } = require('../middleware/auth');

// Apply auth and role middleware to all routes in this file
router.use(auth, requireRole('admin', 'manager'));

// @desc    Get dashboard summary statistics
// @route   GET /api/dashboard/summary
// @access  Admin, Manager
router.get('/summary', getSummary);

// @desc    Get quick action links for the dashboard
// @route   GET /api/dashboard/quick-actions
// @access  Admin, Manager
router.get('/quick-actions', getQuickActions);

module.exports = router;