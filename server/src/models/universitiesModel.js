const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
    name: String,
    country: String,
    city: String,
    logo: String,
    wallpaper: String,
    cardImg: String,
    plot: String,
});

module.exports = mongoose.model('universities', universitySchema);