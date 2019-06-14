const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User