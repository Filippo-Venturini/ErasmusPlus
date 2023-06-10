const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
   university: String,
   city: String,
   country: String,
   student: String,
   id_student: String,
   date: String,
   state: String,
   }, {versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('applications', applicationSchema);