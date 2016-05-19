/**
 * Created by marcioheleno on 17/05/16.
 */
'use strict';

// middleware
exports.render = function (req, res) {
  // res.send('Ola Mundo');
  if (req.session.lastVisit) {
    console.log (req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render('index', {
    title : "Hello Word",
    userFullName : req.user?req.user.fullName:''
  });
};