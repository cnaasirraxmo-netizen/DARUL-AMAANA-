const express = require('express');
const router = express.Router();
const { getClasses, getBranches } = require('../controllers/class.controller');
const { auth } = require('../middleware/auth');

// All class routes require authentication
router.use(auth);

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
router.get('/', getClasses);

// @desc    Get all unique branches
// @route   GET /api/classes/branches
// @access  Private
router.get('/branches', getBranches);

module.exports = router;
