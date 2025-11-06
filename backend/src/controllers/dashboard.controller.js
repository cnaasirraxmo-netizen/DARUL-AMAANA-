const User = require('../models/user.model');
const Student = require('../models/student.model');
const FinanceTransaction = require('../models/financeTransaction.model');
const Attendance = require('../models/attendance.model');

// In-memory cache for the summary data
let cache = {
    data: null,
    timestamp: 0,
};
const CACHE_DURATION_MS = 30 * 1000; // 30 seconds

// @desc    Get dashboard summary statistics
// @route   GET /api/dashboard/summary
// @access  Admin, Manager
const getSummary = async (req, res) => {
    // Check cache
    const now = Date.now();
    if (cache.data && (now - cache.timestamp < CACHE_DURATION_MS)) {
        return res.json(cache.data);
    }

    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const [
            studentsCount,
            staffCount,
            incomeResult,
            presentCount,
            absentCount
        ] = await Promise.all([
            Student.countDocuments({ status: { $ne: 'deleted' } }),
            User.countDocuments({ role: { $in: ['admin', 'manager', 'teacher', 'staff'] } }),
            FinanceTransaction.aggregate([
                { $match: { type: 'income' } },
                { $group: { _id: null, totalIncome: { $sum: '$amount' } } }
            ]),
            Attendance.countDocuments({ date: { $gte: today, $lt: tomorrow }, status: 'present' }),
            Attendance.countDocuments({ date: { $gte: today, $lt: tomorrow }, status: 'absent' })
        ]);

        const totalAttendance = presentCount + absentCount;
        const attendancePercent = totalAttendance > 0 ? (presentCount / totalAttendance) * 100 : 0;
        
        const summaryData = {
            studentsCount,
            staffCount,
            totalIncome: incomeResult.length > 0 ? incomeResult[0].totalIncome : 0,
            attendanceSummary: {
                present: presentCount,
                absent: absentCount,
                percent: parseFloat(attendancePercent.toFixed(1)),
            },
        };

        // Update cache
        cache = {
            data: summaryData,
            timestamp: now,
        };

        res.json(summaryData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// @desc    Get quick action links for the dashboard
// @route   GET /api/dashboard/quick-actions
// @access  Admin, Manager
const getQuickActions = (req, res) => {
    const actions = [
        { title: 'Add New Student', path: '/diwaangilin/arday-cusub', icon: 'PlusCircle' },
        { title: 'Send Message', path: '/reports/notifications-messages', icon: 'MessageSquare' },
        { title: 'Generate Report', path: '/reports/student-list', icon: 'FileText' },
        { title: 'Take Attendance', path: '/administration/attendance-system', icon: 'UserCheck' }, // Assuming an icon name
    ];
    res.json(actions);
};

module.exports = {
    getSummary,
    getQuickActions,
};