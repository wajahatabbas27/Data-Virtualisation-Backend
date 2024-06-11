const mongoose = require('mongoose');

const DataEntrySchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  average: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('DataEntry', DataEntrySchema);