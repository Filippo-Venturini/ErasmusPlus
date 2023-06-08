const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    identificationNumber: String,
    name: String,
    surname: String,
    role: String,
    profileImg: String,
    mail: String,
    cellphone: String,
    course: String,
    immatricolationYear: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);