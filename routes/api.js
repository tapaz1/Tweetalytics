'use strict';

(function () {
  const express = require('express');
  var request = require('request');
  var config = require('../data/twitter_config.js');
  const fs = require('fs');
  // const mongoose = require('mongoose');


  const router = express.Router();

  router.get('/test', function (req, res) {
    res.send('This is a test API call');
  });

  router.get('/', function (req, res) {
    res.send('API Works!!');
    //TODO: DO SOME STUFF ONCE LOADED..
  });

  router.get('/getSearch', function (req, res) {
    res.send(config);
  });

  // function getAllSearchableEntities () {
  //   var searchedEntity = createSearchedEntitySchema();
  //
  //   searchedEntity.find({}, function (error, results) {
  //     console.log(results);
  //   })
  // }

  // function connectToDb () {
  //   mongoose.Promise = global.Promise;
  //   mongoose.connect("mongodb://adam:pass@ds054619.mlab.com:54619/tweetalytics_db");
  //   var db = mongoose.connection;
  //
  //   db.once('open', initializeData);
  //   db.on('error', logError);
  // }
  //
  // function createSearchedEntitySchema () {
  //   const searchedEntitySchema = mongoose.Schema({
  //     name: String
  //   });
  //
  //   return mongoose.model('searchedEntity', searchedEntitySchema);
  // }
  //
  // function initializeData () {
  //   console.log('Connection Established!!!');
  //
  //   var searchedEntity = createSearchedEntitySchema();
  //
  //   var searchedItem = new searchedEntity({name: 'WalMart'});
  //
  //   searchedItem.save(function (error, searchedItem) {
  //     if (error) {
  //       return console.log(error);
  //     }
  //   })
  // }


  // function logError (error) {
  //   console.log('Error occured: ' + error);
  // }

  module.exports = {
    router: router
    // connectToDb: connectToDb
  };
})();
