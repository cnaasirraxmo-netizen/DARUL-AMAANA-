const { parse } = require('csv-parse');
const Student = require('../models/student.model');
const LessonLog = require('../models/lessonLog.model');

const importData = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }
    
    const { dataType } = req.body;
    if (dataType !== 'students') {
        return res.status(400).json({ message: 'Unsupported data type for import. Only "students" is currently supported.' });
    }

    const records = [];
    const parser = parse({
        columns: true,
        skip_empty_lines: true
    });

    parser.on('readable', function(){
        let record;
        while ((record = parser.read()) !== null) {
            records.push(record);
        }
    });

    parser.on('error', function(err){
        return res.status(500).json({ message: `CSV parsing error: ${err.message}` });
    });

    parser.on('end', async function(){
        let successCount = 0;
        let failedCount = 0;
        const errors = [];
        
        for (let i = 0; i < records.length; i++) {
            const record = records[i];
            const rowNum = i + 2; // CSV rows are 1-based, plus header
            try {
                // Basic validation and mapping
                const studentData = {
                    firstName: record.first_name,
                    lastName: record.last_name,
                    dob: record.date_of_birth ? new Date(record.date_of_birth) : undefined,
                    gender: record.gender,
                    guardian: {
                        name: record.guardian_name,
                        phone: record.guardian_phone
                    }
                };
                if (!studentData.firstName || !studentData.lastName) {
                    throw new Error('Missing first_name or last_name.');
                }
                await Student.create(studentData);
                successCount++;
            } catch (error) {
                failedCount++;
                errors.push(`Row ${rowNum}: ${error.message}`);
            }
        }
        
        res.json({
            message: 'Import process completed.',
            successCount,
            failedCount,
            errors
        });
    });

    parser.write(req.file.buffer);
    parser.end();
};

const getPastStudents = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const pastStudentQuery = { status: { $in: ['graduated', 'transferred', 'deleted'] } };
        const students = await Student.find(pastStudentQuery)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate('classId', 'name')
            .sort({ createdAt: -1 });

        const count = await Student.countDocuments(pastStudentQuery);

        res.json({
            students,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page, 10),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const trackClassLesson = async (req, res) => {
    try {
        // Assuming body contains: classId, subject, teacher, date, lesson-details (topicsCovered)
        const { class: classId, subject, teacher, 'lesson-date': date, 'lesson-details': topicsCovered } = req.body;
        
        const lessonLog = new LessonLog({
            classId,
            subject,
            teacher,
            date,
            topicsCovered,
            recordedBy: req.user._id,
        });
        await lessonLog.save();
        res.status(201).json(lessonLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    importData,
    getPastStudents,
    trackClassLesson
};
