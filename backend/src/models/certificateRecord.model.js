const mongoose = require('mongoose');

const certificateRecordSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  templateCode: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  issuedAt: {
    type: Date,
    default: Date.now,
  },
  fileUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

certificateRecordSchema.index({ student: 1 });

const CertificateRecord = mongoose.model('CertificateRecord', certificateRecordSchema);
module.exports = CertificateRecord;
