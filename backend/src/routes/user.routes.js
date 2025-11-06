const express = require('express');
const router = express.Router();
const { getUsers, updateUser } = require('../controllers/user.controller');
const { auth, requireRole } = require('../middleware/auth');

// All routes in this file are for admins only
router.use(auth, requireRole('admin'));

router.get('/', getUsers);
router.put('/:id', updateUser);

module.exports = router;