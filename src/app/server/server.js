'use strict';

(function () {
  const express = require('express');
  const path = require('path');
  const http = require('http');
  const bodyParser = require('body-parser');
  const api = require('./routes/api');
  const httpCors = require('cors');
  var functions = require('./functions');

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(httpCors());

  app.post('/authorize', functions.authorize);
  app.post('/search', functions.search);

  // app.use(express.static(path.join(__dirname, '../../../dist')));

  app.use('/api', api.router);
  //
  // app.get('*', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../../../dist/index.html'));
  // });

  const port = process.env.PORT || '3000';
  app.set('port', port);

  const server = http.createServer(app);

  server.listen(port, function () {
    console.log('API running on localhost:' + port);
  });
})();

