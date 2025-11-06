const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const auditLogger = require('../utils/logger');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public (or Admin only in a real scenario)
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      return res.status(400).json({ message: 'User with this email or username already exists' });
    }

    const user = await User.create({
      username,
      email,
      password,
      role, // In a real app, you'd restrict who can set roles
    });

    if (user) {
      auditLogger.info(`User registered successfully: ${user.username}`, { userId: user._id });
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email: loginIdentifier, password } = req.body;

  if (!loginIdentifier || !password) {
      return res.status(400).json({ message: 'Please provide credentials' });
  }

  try {
    const loginIdentifierLower = loginIdentifier.toLowerCase();
    
    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email: loginIdentifierLower }, { username: loginIdentifierLower }],
    });

    if (user && (await user.comparePassword(password))) {
      if (user.status === 'inactive') {
        auditLogger.warn(`Inactive user login attempt: ${user.username}`);
        return res.status(403).json({ message: 'Your account is inactive. Please contact an administrator.' });
      }
      auditLogger.info(`User logged in: ${user.username}`, { userId: user._id });
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      auditLogger.warn(`Failed login attempt for: ${loginIdentifier}`);
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};