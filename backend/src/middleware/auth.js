const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const auditLogger = require('../utils/logger');

// Middleware to verify JWT token
const auth = async (req, res, next) => {
  let token;
  const authHeader = req.header('Authorization');

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user to the request, excluding the password
      req.user = await User.findById(decoded.id).select('-password');
      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      next();
    } catch (error) {
      auditLogger.warn('JWT verification failed', { error: error.message, token });
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Middleware to check for specific roles
const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      auditLogger.warn('Role-based access denied', { 
        userId: req.user?._id, 
        requiredRoles: roles, 
        userRole: req.user?.role 
      });
      return res.status(403).json({ message: 'Forbidden: Insufficient role' });
    }
    next();
  };
};

// Middleware to check for specific permissions
const requirePermission = (...requiredPermissions) => {
  return (req, res, next) => {
    if (!req.user || !req.user.permissions) {
       return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    const hasAllPermissions = requiredPermissions.every(p => req.user.permissions.includes(p));

    if (!hasAllPermissions) {
       auditLogger.warn('Permission-based access denied', { 
        userId: req.user._id, 
        requiredPermissions, 
        userPermissions: req.user.permissions 
      });
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    next();
  };
};

module.exports = { auth, requireRole, requirePermission };
