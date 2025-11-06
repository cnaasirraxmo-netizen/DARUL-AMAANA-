const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('../models/student.model');
const Attendance = require('../models/attendance.model');
const FinanceTransaction = require('../models/financeTransaction.model');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });

const seedDashboardData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for dashboard seeding.');

    // Clear existing data
    await Attendance.deleteMany({});
    await FinanceTransaction.deleteMany({});
    console.log('Cleared existing dashboard-related data.');

    // --- Seed Finance Transactions ---
    const transactions = [
      { amount: 250, type: 'income', description: 'Tuition Fee - S001' },
      { amount: 250, type: 'income', description: 'Tuition Fee - S002' },
      { amount: 150, type: 'expense', description: 'Office Supplies' },
      { amount: 800, type: 'expense', description: 'Utility Bill' },
      { amount: 12000, type: 'income', description: 'Grant from MoE' },
    ];
    await FinanceTransaction.insertMany(transactions);
    console.log(`${transactions.length} finance transactions seeded.`);

    // --- Seed Attendance ---
    const students = await Student.find({ status: 'active' }).limit(10);
    if (students.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const attendanceRecords = students.map((student, index) => ({
        student: student._id,
        date: today,
        // Make most students present
        status: index % 5 === 0 ? 'absent' : 'present', 
      }));

      await Attendance.insertMany(attendanceRecords);
      console.log(`${attendanceRecords.length} attendance records for today seeded.`);
    } else {
      console.log('No active student found to seed attendance for. Please run the student seeder first.');
    }

  } catch (error) {
    console.error('Error seeding dashboard data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
    process.exit();
  }
};

seedDashboardData();