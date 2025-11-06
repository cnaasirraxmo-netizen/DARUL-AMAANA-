const Class = require('../models/class.model');

const getClasses = async (req, res) => {
    try {
        const classes = await Class.find({}).sort('name');
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBranches = async (req, res) => {
    try {
        // Find all unique branch names from the Class collection
        const branches = await Class.distinct('branch');
        // Map the array of strings to an array of objects for frontend select-option compatibility
        res.json(branches.map(b => ({ id: b, name: b })));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getClasses, getBranches };
