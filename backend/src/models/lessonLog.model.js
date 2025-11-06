const mongoose = require('mongoose');

const lessonLogSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  subject: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  topicsCovered: { type: String, required: true },
  recordedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

lessonLogSchema.index({ date: -1, classId: 1 });

const LessonLog = mongoose.model('LessonLog', lessonLogSchema);
module.exports = LessonLog;
