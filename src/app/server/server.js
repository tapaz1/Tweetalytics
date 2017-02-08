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

  app.use('/', api.router);
  //
  app.get('/', function (req, res) {
    console.log(path.join(__dirname, '../../../dist/index.html'));
    res.sendFile(path.join(__dirname, '../../../dist/index.html'));
  });

  app.get('/*.js', function (req, res) {
    console.log('Requesting js files..');
    console.log(req);
    res.sendFile(path.join(__dirname, '../../../dist' + req.url));
  });

  app.get('*.css', function (req, res) {
    console.log('Requesting css files..');
    res.sendFile(path.join(__dirname, '../../../dist' + req.url));
  });

  const port = process.env.PORT || '3000';
  app.set('port', port);

  const server = http.createServer(app);

  server.listen(port, function () {
    console.log('API running on localhost:' + port);
  });
})();

