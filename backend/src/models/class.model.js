const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  branch: { 
    type: String, // Simplified for now, can be changed to ObjectId ref later
    required: true
  },
  level: { 
    type: String,
    required: true
  }
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);

module.exports = Class;