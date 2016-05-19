/**
 * Created by marcioheleno on 17/05/16.
 */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// var connect = require('connect');

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();
// app.use('/', function (req, res) {
//   res.send('Hello Word');
// });
app.listen(3000);
module.exports = app;

console.log("Sever rodandodo em http://localhost:3000/");

