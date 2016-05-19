/**
 * Created by marcioheleno on 18/05/16.
 */
'use strict';

var user = require('../../app/controller/users.server.controller'),
    passport = require('passport');

module.exports = function(app) {

  // lista de usuarios
  // app.route('/users')
  //   .post(user.create)
  //   .get(user.list);
  //
  // app.route('/users/:userId')
  //   .get(user.read)
  //   .put(user.update)
  //   .delete(user.delete);
  //
  // app.param('userId', user.userByID);

  app.route('/signup')
    .get(user.renderSignup)
    .post(user.signup);

  app.route('/signin')
    .get(user.renderSignin)
    .post(passport.authenticate('local', {
      sucessRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
    }));

  app.get('/signout', user.signout);
};