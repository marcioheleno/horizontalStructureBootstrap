/**
 * Created by marcioheleno on 17/05/16.
 */
'use strict';

module.exports = function (app) {
  var index = require ('../controller/index.server.controller');
  app.get('/', index.render);
};
