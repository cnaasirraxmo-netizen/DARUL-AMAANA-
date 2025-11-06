const User = require('../models/user.model');

// @desc    Get all users
// @route   GET /api/users
// @access  Admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a user
// @route   PUT /api/users/:id
// @access  Admin
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, role, status, password } = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        user.role = role || user.role;
        user.status = status || user.status;

        if (password && password.length >= 8) {
            user.password = password;
        } else if (password) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
        }

        const updatedUser = await user.save();
        
        // Return user without password
        const userToReturn = updatedUser.toObject();
        delete userToReturn.password;

        res.json(userToReturn);
    } catch (error) {
        // Handle duplicate key error for username/email
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Username or email already exists.' });
        }
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getUsers, updateUser };