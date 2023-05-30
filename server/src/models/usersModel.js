const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    role: String,
    profileImg: String
});

module.exports = mongoose.model('users', userSchema);