const mongoose = require('mongoose');
const dotenv = require('dotenv');
const CertificateTemplate = require('../models/certificateTemplate.model');
const User = require('../models/user.model');

dotenv.config({ path: require('path').resolve(__dirname, '../../.env') });

const studentCertificateHtml = `
<div style="padding: 2rem; border: 5px double #0ea5e9; font-family: sans-serif; max-width: 800px; margin: auto;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 0.5rem;">Mogadishu Primary & Secondary School</h2>
        <p style="color: #6b7280;">Official Document</p>
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; border-bottom: 2px solid #333; padding-bottom: 0.5rem; display: inline-block;">Caddeynta Ardayga</h3>
    </div>
    <div style="font-size: 1.125rem; line-height: 1.75; space-y: 1rem;">
        <p><span style="font-weight: 600;">To Whom It May Concern,</span></p>
        <p>
            This is to certify that <span style="font-weight: bold;">{{studentName}}</span> is a bonafide student
            at our institution. He/She is currently enrolled in <span style="font-weight: bold;">{{className}}</span> for the
            academic year <span style="font-weight: bold;">{{academicYear}}</span>.
        </p>
        <p style="margin-top: 1.5rem;">This certificate is issued for whatever official purpose it may serve.</p>
    </div>
    <div style="margin-top: 4rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
        <div>
            <p>_________________________</p>
            <p style="font-weight: 600;">{{principalName}}</p>
            <p style="font-weight: 600;">Principal's Signature</p>
        </div>
        <div>
            <p>Date: {{issueDate}}</p>
        </div>
    </div>
</div>
`;

const disciplineCertificateHtml = `
<div style="padding: 2rem; border: 5px double #0ea5e9; font-family: sans-serif; max-width: 800px; margin: auto;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 0.5rem;">Mogadishu Primary & Secondary School</h2>
        <p style="color: #6b7280;">Official Document</p>
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; border-bottom: 2px solid #333; padding-bottom: 0.5rem; display: inline-block;">Cadeyn Anshaxa Ardayga</h3>
    </div>
    <div style="font-size: 1.125rem; line-height: 1.75; space-y: 1rem;">
        <p><span style="font-weight: 600;">To Whom It May Concern,</span></p>
        <p>This document outlines the disciplinary record for the student <span style="font-weight: bold;">{{studentName}}</span> of class <span style="font-weight: bold;">{{className}}</span>.</p>
        <p style="font-weight: 600; margin-top: 1rem;">Incidents on Record:</p>
        <div style="padding-left: 1rem;">{{incidentDetails}}</div>
        <p style="margin-top: 1.5rem;">This report is a true and accurate reflection of the student's record in our system.</p>
    </div>
    <div style="margin-top: 4rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
        <div>
            <p>_________________________</p>
            <p style="font-weight: 600;">Head of Discipline</p>
        </div>
        <div>
            <p>Date: {{issueDate}}</p>
        </div>
    </div>
</div>
`;


const seedCertificateTemplates = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for certificate template seeding.');

    await CertificateTemplate.deleteMany({});
    console.log('Cleared existing certificate templates.');

    const adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      throw new Error('Admin user not found. Please run admin seeder first.');
    }

    const templates = [
      {
        code: 'STUDENT_CERTIFICATE',
        title: 'Caddeynta Ardayga (Student Certificate)',
        templateHtml: studentCertificateHtml,
        fields: ['studentName', 'className', 'academicYear', 'principalName', 'issueDate'],
        createdBy: adminUser._id,
      },
      {
        code: 'DISCIPLINE_CERTIFICATE',
        title: 'Cadeyn Anshaxa Ardayga (Discipline Certificate)',
        templateHtml: disciplineCertificateHtml,
        fields: ['studentName', 'className', 'incidentDetails', 'issueDate'],
        createdBy: adminUser._id,
      },
    ];

    await CertificateTemplate.insertMany(templates);
    console.log(`${templates.length} certificate templates seeded successfully.`);

  } catch (error) {
    console.error('Error seeding certificate templates:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  }
};

const runSeed = async () => {
    await seedCertificateTemplates();
    process.exit();
}

runSeed();
