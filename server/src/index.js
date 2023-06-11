const express = require('express');
const mongoose = require('mongoose');
const universitiesRouter = require('./routes/universitiesRoute');
const usersRouter = require('./routes/usersRoute');
const applicationsRouter = require('./routes/applicationsRoute');

const app = express();
var cors = require('cors');

app.options('*', cors()); // include before other routes
app.use(express.json());
app.use(universitiesRouter);
app.use(applicationsRouter);
app.use(usersRouter);


//mongoose.connect('mongodb://127.0.0.1:27017/erasmusPlusDB').then(() => {
mongoose.connect('mongodb://127.0.0.1:27018/erasmusPlusDB').then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
});

const server = app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-type,Accept,X-Custom-Header"],
        credentials: true
    }
});

exports.sendUpdatedApplications = (data) =>{
    io.emit('APPLICATIONS', data);
}