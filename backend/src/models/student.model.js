const mongoose = require('mongoose');

const behaviorRecordSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: { type: String, required: true },
  description: { type: String, required: true },
  actionTaken: { type: String },
  recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const transferRecordSchema = new mongoose.Schema({
  fromClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  toClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  date: { type: Date, default: Date.now },
  reason: { type: String },
  by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const studentSchema = new mongoose.Schema({
  studentId: { type: String, unique: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  dob: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  status: {
    type: String,
    enum: ['active', 'suspended', 'transferred', 'deleted'],
    default: 'active'
  },
  guardian: {
    name: { type: String },
    phone: { type: String }
  },
  behaviorRecords: [behaviorRecordSchema],
  transferRecords: [transferRecordSchema]
}, { timestamps: true });

// Text index for searching
studentSchema.index({ firstName: 'text', lastName: 'text', studentId: 'text' });

// Pre-save hook to generate studentId if not provided
studentSchema.pre('save', async function(next) {
    if (this.isNew && !this.studentId) {
        const lastStudent = await this.constructor.findOne({}, {}, { sort: { 'createdAt': -1 } });
        let nextIdNumber = 1;
        if (lastStudent && lastStudent.studentId) {
            const lastIdNumber = parseInt(lastStudent.studentId.replace('S', ''), 10);
            if (!isNaN(lastIdNumber)) {
                nextIdNumber = lastIdNumber + 1;
            }
        }
        this.studentId = `S${String(nextIdNumber).padStart(4, '0')}`;
    }
    next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;