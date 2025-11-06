const express = require('express');
const router = express.Router();
const { auth, requireRole, requirePermission } = require('../middleware/auth');

// @desc    A public route
// @route   GET /api/example/public
// @access  Public
router.get('/public', (req, res) => {
    res.json({ message: 'This is a public endpoint. Anyone can access this!' });
});

// @desc    A protected route for any logged-in user
// @route   GET /api/example/protected
// @access  Private
router.get('/protected', auth, (req, res) => {
    res.json({ 
        message: `Hello ${req.user.username}! You have accessed a protected route.`,
        user: req.user
    });
});

// @desc    An admin-only route
// @route   GET /api/example/admin-only
// @access  Admin
router.get('/admin-only', auth, requireRole('admin'), (req, res) => {
    res.json({ message: 'Welcome, Admin! This is a highly restricted area.' });
});

// @desc    A route for multiple roles
// @route   GET /api/example/staff-area
// @access  Admin, Manager, Teacher, Staff
router.get('/staff-area', auth, requireRole('admin', 'manager', 'teacher', 'staff'), (req, res) => {
    res.json({ message: `Welcome ${req.user.role}! You have access to the staff area.` });
});


// @desc    A route requiring a specific permission
// @route   GET /api/example/edit-grades
// @access  Private (with 'can_edit_grades' permission)
router.get('/edit-grades', auth, requirePermission('can_edit_grades'), (req, res) => {
    res.json({ message: 'Permission granted. You can now edit grades.' });
});

module.exports = router;
