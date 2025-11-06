const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Route imports
const authRoutes = require('./src/routes/auth.routes');
const exampleRoutes = require('./src/routes/example.routes');
const dashboardRoutes = require('./src/routes/dashboard.routes');
const studentRoutes = require('./src/routes/student.routes');
const financeRoutes = require('./src/routes/finance.routes');
const classRoutes = require('./src/routes/class.routes');
const userRoutes = require('./src/routes/user.routes'); // Import user routes
const certificateRoutes = require('./src/routes/certificate.routes');
const dataRoutes = require('./src/routes/data.routes');
const auditLogger = require('./src/utils/logger');

const app = express();

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://<db_username>:<db_password>@darulamana.amhiirw.mongodb.net/?appName=DARULAMANA')
  .then(() => console.log('MongoDB connection successful.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// --- Middleware ---
// Set security HTTP headers
app.use(helmet());

// Configure CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

// JSON body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger (for development)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
	standardHeaders: true,
	legacyHeaders: false, 
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter);

// --- API Routes ---
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to SAHAN Service (Darulamana) API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/example', exampleRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/users', userRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/data', dataRoutes);


// --- Error Handling ---
// 404 Not Found
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    auditLogger.error(`Unhandled Error: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: 'An internal server error occurred' });
});


// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});