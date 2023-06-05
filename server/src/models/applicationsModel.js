const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
   university: String,
   city: String,
   country: String,
   student: String,
   date: String,
   state: String,
});

module.exports = mongoose.model('applications', applicationSchema);