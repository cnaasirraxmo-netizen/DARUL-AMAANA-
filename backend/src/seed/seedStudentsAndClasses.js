const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('../models/student.model');
const Class = require('../models/class.model');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });

const seedStudentsAndClasses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for student and class seeding.');

    // Clear existing data
    await Student.deleteMany({});
    await Class.deleteMany({});
    console.log('Cleared existing students and classes.');

    // --- Seed Classes ---
    const classes = await Class.insertMany([
      { name: 'Grade 7A', branch: 'Main', level: '7' },
      { name: 'Grade 7B', branch: 'Main', level: '7' },
      { name: 'Grade 8A', branch: 'West', level: '8' },
    ]);
    console.log(`${classes.length} classes seeded.`);
    const class7A = classes.find(c => c.name === 'Grade 7A');
    const class8A = classes.find(c => c.name === 'Grade 8A');

    // --- Seed Students ---
    const students = [
      {
        firstName: 'Ahmed',
        lastName: 'Ali',
        dob: new Date('2010-05-10'),
        gender: 'Male',
        classId: class7A._id,
        guardian: { name: 'Ali Omar', phone: '615551111' },
      },
      {
        firstName: 'Fatima',
        lastName: 'Omar',
        dob: new Date('2009-02-15'),
        gender: 'Female',
        classId: class8A._id,
        guardian: { name: 'Omar Hassan', phone: '615552222' },
      },
       {
        firstName: 'Yusuf',
        lastName: 'Hassan',
        dob: new Date('2010-08-20'),
        gender: 'Male',
        classId: class7A._id,
        status: 'suspended',
        guardian: { name: 'Hassan Abdi', phone: '615553333' },
      },
    ];

    await Student.insertMany(students);
    console.log(`${students.length} students seeded.`);

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
    process.exit();
  }
};

seedStudentsAndClasses();