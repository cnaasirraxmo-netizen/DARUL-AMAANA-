const mongoose = require('mongoose');

const certificateTemplateSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  templateHtml: {
    type: String,
    required: true,
  },
  fields: {
    type: [String],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const CertificateTemplate = mongoose.model('CertificateTemplate', certificateTemplateSchema);
module.exports = CertificateTemplate;
