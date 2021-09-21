const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let bookRouter = require('./routes/book');
let filmRouter = require('./routes/film');
let adaptiveRouter = require('./routes/adaptive');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//view static metadata
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/film', filmRouter);
app.use('/adaptive', adaptiveRouter);

module.exports = app;
