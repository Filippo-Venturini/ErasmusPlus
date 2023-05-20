const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/erasmusPlusDB').then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});