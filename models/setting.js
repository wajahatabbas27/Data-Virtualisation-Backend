const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Setting', SettingSchema);