const express = require('express');
const mongoose = require('mongoose');
const universitiesRouter = require('./routes/universitiesRoute');

const app = express();

app.use(universitiesRouter);
app.use(express.json());

//mongoose.connect('mongodb://127.0.0.1:27018/erasmusPlusDB').then(() => {
mongoose.connect('mongodb://127.0.0.1:27018/erasmusPlusDB').then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});