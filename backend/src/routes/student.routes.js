const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const { auth, requireRole, requirePermission } = require('../middleware/auth');

// Create a new student
router.post('/', auth, requirePermission('manage_students'), studentController.createStudent);

// Get all students (with filtering and pagination)
router.get('/', auth, studentController.getAllStudents);

// Get list of transfer requests/records
router.get('/transfers', auth, requirePermission('manage_students'), studentController.getTransferRequests);

// Get a single student by ID
router.get('/:id', auth, studentController.getStudentById);

// Update a student
router.put('/:id', auth, requirePermission('manage_students'), studentController.updateStudent);

// Suspend or reactivate a student (Admin only)
router.put('/:id/suspend', auth, requireRole('admin'), studentController.suspendOrReactivateStudent);

// Restore a student (Admin only)
router.put('/restore/:id', auth, requireRole('admin'), studentController.restoreStudent);

// Transfer a student to a new class
router.post('/:id/transfer', auth, requirePermission('manage_students'), studentController.transferStudent);

// Add a behavior record for a student
router.post('/:id/behavior', auth, requirePermission('manage_students'), studentController.addBehaviorRecord);

module.exports = router;