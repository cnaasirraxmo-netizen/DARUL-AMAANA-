const express = require('express');
const router = express.Router();
const { createTemplate, getTemplates, generateCertificate, getStudentCertificates } = require('../controllers/certificate.controller');
const { auth, requireRole, requirePermission } = require('../middleware/auth');

// All routes require authentication
router.use(auth);

// Template routes
router.get('/templates', getTemplates);
router.post('/templates', requireRole('admin'), createTemplate);

// Certificate generation and retrieval
router.post('/generate', requirePermission('generate_certificate'), generateCertificate);
router.get('/student/:studentId', getStudentCertificates);

module.exports = router;
