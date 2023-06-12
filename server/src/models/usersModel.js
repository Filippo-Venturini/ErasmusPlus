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
    immatriculationYear: String,
    password: String,
    favourites: Array,
    notification: [{
        idNotification: String,
        text: String,
        read: String,
        kind: String
    }]
});

module.exports = mongoose.model('users', userSchema);