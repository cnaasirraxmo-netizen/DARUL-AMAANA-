const CertificateTemplate = require('../models/certificateTemplate.model');
const CertificateRecord = require('../models/certificateRecord.model');
const Student = require('../models/student.model');
const auditLogger = require('../utils/logger');
const mongoose = require('mongoose');

// @desc    Create a new certificate template
// @route   POST /api/certificates/templates
// @access  Admin
const createTemplate = async (req, res) => {
    try {
        const { code, title, templateHtml, fields } = req.body;
        const newTemplate = new CertificateTemplate({
            code,
            title,
            templateHtml,
            fields,
            createdBy: req.user._id,
        });
        await newTemplate.save();
        auditLogger.info(`Certificate template created: ${code}`, { userId: req.user._id });
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all certificate templates
// @route   GET /api/certificates/templates
// @access  Private
const getTemplates = async (req, res) => {
    try {
        const templates = await CertificateTemplate.find({}).select('code title fields');
        res.json(templates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Generate a new certificate
// @route   POST /api/certificates/generate
// @access  Private (generate_certificate permission)
const generateCertificate = async (req, res) => {
    const { studentId, templateCode, data } = req.body;
    try {
        const student = await Student.findOne({ studentId });
        const template = await CertificateTemplate.findOne({ code: templateCode });

        if (!student) {
            return res.status(404).json({ message: `Student with ID ${studentId} not found.` });
        }
        if (!template) {
            return res.status(404).json({ message: `Template with code ${templateCode} not found.` });
        }

        // Mock PDF generation & upload
        // In a real implementation, you would replace placeholders and use a library like Puppeteer to generate a PDF.
        // For this context, we will mock the file URL and save the record.
        const mockFileUrl = `https://fake-cdn.com/certs/${new mongoose.Types.ObjectId()}.pdf`;

        const record = new CertificateRecord({
            student: student._id,
            templateCode,
            data,
            issuedBy: req.user._id,
            fileUrl: mockFileUrl,
        });
        await record.save();

        auditLogger.info(`Certificate generated for student ${studentId} using template ${templateCode}`, {
            userId: req.user._id,
            studentId: student._id,
            recordId: record._id,
        });

        res.status(201).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all certificates for a student
// @route   GET /api/certificates/student/:studentId
// @access  Private
const getStudentCertificates = async (req, res) => {
    try {
        const student = await Student.findOne({ studentId: req.params.studentId });
        if (!student) {
            return res.status(404).json({ message: `Student with ID ${req.params.studentId} not found.` });
        }
        const records = await CertificateRecord.find({ student: student._id })
            .populate('issuedBy', 'username')
            .sort({ issuedAt: -1 });

        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTemplate,
    getTemplates,
    generateCertificate,
    getStudentCertificates,
};
