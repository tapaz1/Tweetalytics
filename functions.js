var request = require('request');
var config = require('../../../data/twitter_config.js');

functions = {
  authorize: function(req, res) {
    var header = config.consumerKey + ':' + config.consumerSecret;
    var encodedHeader = new Buffer(header).toString('base64');
    var finalHeader = 'Basic ' + encodedHeader;

    request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
    headers: {'Authorization': finalHeader}}, function (error, response, body) {
      if(error) {
        console.log(error);
      } else {
        config.bearerToken = JSON.parse(body).access_token;

        res.json({success: true, data:config.bearerToken});
      }
    })
  },
  search: function(req, res) {
    var searchQuery = encodeURIComponent(req.body.query);
    var bearerHeader = 'Bearer ' + config.bearerToken;
    var query = {};

    if(!config.bearerToken) {
      console.log('Bearer token is undefined. Go get it..');
    }

    request.get('https://api.twitter.com/1.1/users/show.json?screen_name=' + searchQuery, {headers: {'Authorization': bearerHeader}}, function (error, response, body) {
      if(error) {
        console.log(error);
      } else {
        query.entityInfo = JSON.parse(body);
        request.get('https://api.twitter.com/1.1/search/tweets.json?q=@' + searchQuery + '&results_type_recent&count=100', {headers: {'Authorization': bearerHeader}}, function (error, response, body) {
          if(error) {
            console.log(error);
          } else {
            query.entityTweets = JSON.parse(body).statuses;
            res.json(query);
            // request.get('https://api.twitter.com/1.1/users/suggestions.json', {headers: {'Authorization': bearerHeader}}, function (error, response, body) {
            //   if(error) {
            //     console.log(error);
            //   } else {
            //     query.userSuggestions = JSON.parse(body);
            //     // res.json(query);
            //     //TODO Store the information of the searched entity and create an algorithm to determine what category it falls in to better align with the suggestions from Twitter
            //     // request.get('https://api.twitter.com/1.1/users/suggestions/business.json', {headers: {'Authorization': bearerHeader}}, function (error, response, body) {
            //     //   console.log(JSON.parse(body));
            //     //   if(error) {
            //     //     console.log(error);
            //     //   } else {
            //     //     console.log(JSON.parse(body));
            //     //     query.users = JSON.parse(body);
            //     //     res.json(query);
            //     //   }
            //     // })
            //   }
            // })
          }
        })
      }
    });
  }
};

function getBearerToken () {

}

module.exports = functions;
