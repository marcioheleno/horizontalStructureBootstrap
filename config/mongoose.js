/**
 * Created by marcioheleno on 18/05/16.
 */
'use strict';
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
  var db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  return db;
};

