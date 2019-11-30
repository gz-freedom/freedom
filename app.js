var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wealthRouter = require('./routes/wealth');
var readRouter = require('./routes/read');

mongoose.connect('mongodb://localhost/freedom', {
    promiseLibrary: require('bluebird'),
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("database connect successfully."))
.catch(err => console.log(err));

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/wealth', wealthRouter);
app.use('/read', readRouter);
app.use('/users', usersRouter);

module.exports = app;
