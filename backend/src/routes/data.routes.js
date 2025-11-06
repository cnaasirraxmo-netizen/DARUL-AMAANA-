const express = require('express');
const router = express.Router();
const { importData, getPastStudents, trackClassLesson } = require('../controllers/data.controller');
const { auth, requirePermission } = require('../middleware/auth');
const upload = require('../middleware/upload');

// All data routes require 'import_data' permission (or a more granular one)
router.use(auth, requirePermission('import_data'));

// @desc    Import data from a file
// @route   POST /api/data/import
// @access  Admin
router.post('/import', upload.single('importFile'), importData);

// @desc    Get past students (graduated, transferred, deleted)
// @route   GET /api/data/past-students
// @access  Admin
router.get('/past-students', getPastStudents);

// @desc    Track a class lesson
// @route   POST /api/data/class-lessons
// @access  Admin
router.post('/class-lessons', trackClassLesson);

module.exports = router;
