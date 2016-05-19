/**
 * Created by marcioheleno on 18/05/16.
 */
'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');


module.exports = function () {
  passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({
      username : username
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done (null, false, {
          message : 'Usuário Desconhecido'
        });
      }

      if (!user.authenticate(password)) {
        return done(null, false, {
          message : "Senha Inválida"
        });
      }
      return done(null, user);
    });
  }));
};
