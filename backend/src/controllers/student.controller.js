const Student = require('../models/student.model');
const mongoose = require('mongoose');

// @desc    Get all students with filtering and pagination
// @route   GET /api/students
// @access  Private
const getAllStudents = async (req, res) => {
    const { q, class: classId, status, page = 1, limit = 20, studentId, gender } = req.query;
    const query = {};

    if (q) {
        const regex = new RegExp(q, 'i');
        query.$or = [{ firstName: regex }, { lastName: regex }];
    }
    if (classId) {
        query.classId = classId;
    }
    if (status && status !== 'Any') {
        query.status = status.toLowerCase();
    }
     if(studentId) {
        query.studentId = new RegExp(studentId, 'i');
    }
    if(gender && gender !== 'Any') {
        query.gender = gender;
    }


    try {
        const students = await Student.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate('classId', 'name')
            .sort({ createdAt: -1 })
            .exec();

        const count = await Student.countDocuments(query);

        res.json({
            students,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page, 10),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single student by ID
// @route   GET /api/students/:id
// @access  Private
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('classId');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new student
// @route   POST /api/students
// @access  Private (requires 'manage_students' permission)
const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a student
// @route   PUT /api/students/:id
// @access  Private (requires 'manage_students' permission)
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Suspend or reactivate a student
// @route   PUT /api/students/:id/suspend
// @access  Admin only
const suspendOrReactivateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        student.status = student.status === 'active' ? 'suspended' : 'active';
        await student.save();
        res.json({ message: `Student status updated to ${student.status}`, student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Transfer a student
// @route   POST /api/students/:id/transfer
// @access  Private (requires 'manage_students' permission)
const transferStudent = async (req, res) => {
    const { toClass, reason } = req.body;
    if (!toClass) {
        return res.status(400).json({ message: 'Destination class (toClass) is required.' });
    }

    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const transferRecord = {
            fromClass: student.classId,
            toClass,
            reason,
            by: req.user._id,
        };

        student.transferRecords.push(transferRecord);
        student.classId = toClass;
        student.status = 'active'; // A transfer should likely keep the student active
        await student.save();
        res.json({ message: 'Student transferred successfully', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get students with transfer records
// @route   GET /api/students/transfers
// @access  Private
const getTransferRequests = async (req, res) => {
    try {
        const students = await Student.find({ transferRecords: { $exists: true, $not: { $size: 0 } } })
            .populate('transferRecords.fromClass transferRecords.toClass transferRecords.by');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Restore a deleted student
// @route   PUT /api/students/restore/:id
// @access  Admin only
const restoreStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        if (student.status !== 'deleted') {
            return res.status(400).json({ message: 'Student is not deleted.' });
        }
        student.status = 'active';
        await student.save();
        res.json({ message: 'Student restored successfully.', student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a behavior record
// @route   POST /api/students/:id/behavior
// @access  Private (requires 'manage_students' permission)
const addBehaviorRecord = async (req, res) => {
    const { type, description, actionTaken } = req.body;
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        const behaviorRecord = {
            type,
            description,
            actionTaken,
            recordedBy: req.user._id,
        };
        student.behaviorRecords.push(behaviorRecord);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    suspendOrReactivateStudent,
    transferStudent,
    getTransferRequests,
    restoreStudent,
    addBehaviorRecord,
};