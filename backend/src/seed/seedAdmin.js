const mongoose = require('mongoose');
const User = require('../models/user.model');
const dotenv = require('dotenv');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding.');

    const adminEmail = process.env.ADMIN_EMAIL || 'sahan@example.com';
    const adminUsername = process.env.ADMIN_USERNAME || 'sahan';
    const adminPassword = process.env.ADMIN_PASSWORD || 'SAHAN8';

    const adminExists = await User.findOne({ $or: [{ email: adminEmail }, { username: adminUsername }] });

    if (adminExists) {
      // Update existing admin with new permissions if they don't have them
      const permissionsToAdd = [];
      if (!adminExists.permissions.includes('finance_read')) {
        permissionsToAdd.push('finance_read');
      }
      if (!adminExists.permissions.includes('finance_write')) {
        permissionsToAdd.push('finance_write');
      }
      if (!adminExists.permissions.includes('generate_certificate')) {
        permissionsToAdd.push('generate_certificate');
      }
      if (!adminExists.permissions.includes('import_data')) {
        permissionsToAdd.push('import_data');
      }
      
      if (permissionsToAdd.length > 0) {
        adminExists.permissions.push(...permissionsToAdd);
        await adminExists.save();
        console.log(`Admin user updated with new permissions: ${permissionsToAdd.join(', ')}.`);
      } else {
        console.log('Admin user already exists with all required permissions.');
      }
      return;
    }

    await User.create({
      username: adminUsername,
      email: adminEmail,
      password: adminPassword,
      role: 'admin',
      permissions: [
        'can_do_everything',
        'manage_students',
        'finance_read',
        'finance_write',
        'generate_certificate',
        'import_data'
      ]
    });

    console.log('Default admin user created successfully.');

  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  }
};

const runSeed = async () => {
    await seedAdmin();
    process.exit();
}

runSeed();