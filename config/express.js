/**
 * Created by marcioheleno on 17/05/16.
 */
'use strict';

var config = require('./config'),
    session = require('express-session'),
    flash = require('connect-flash'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParse = require('body-parser'),
    methodOverride = require('method-override'),
    passport = require('passport');

module.exports = function () {
  var app = express();
  if(process.env.NODE_ENV === 'development'){
    console.log('NODE_ENV === desenvovimento');
    app.use(morgan('dev'));
  }else if (process.env.NODE_ENV === 'production'){
    console.log('NODE_ENV === produção');
    app.use(compress());
  }

  app.use(bodyParse.urlencoded ({
    extended: true
  }));

  app.use(bodyParse.json());
  app.use(methodOverride());

  // Sessão
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  // configuração de visão
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // module flash
  app.use(flash());
  
  // modules pass
  app.use(passport.initialize());
  app.use(passport.session());

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);

  app.use(express.static('./public'));
  return app;
};

