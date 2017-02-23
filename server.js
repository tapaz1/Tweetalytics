'use strict';

(function () {
  const express = require('express');
  const path = require('path');
  const http = require('http');
  const bodyParser = require('body-parser');
  var api = require('./routes/api');
  const httpCors = require('cors');
  var functions = require('./functions');

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(httpCors());
  app.use('/api', api);

  app.post('google.com/api/authorize', functions.authorize);
  app.post('google.com/api/search', functions.search);

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.get('/*.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/' + req.url));
  });

  app.get('*.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/' + req.url));
  });

  app.get('/api', function (req, res) {
    res.json('API is working!!!!')
  });

  const port = process.env.PORT || 1337;
  app.set('port', port);

  app.listen(port, function () {
    console.log('API running on localhost:' + port);
  });
})();

