var graphql = require ('graphql').graphql  
var express = require('express')  
var graphQLHTTP = require('express-graphql')  
var Schema = require('./schema')  

var port = process.env.PORT || 8080;

var query = 'query { talks { title, speaker } }'
graphql(Schema, query).then( function(result) {
  console.log(JSON.stringify(result,null," "));
});

var app = express()
  .use('/', graphQLHTTP({ schema: Schema, pretty: true }))
  .listen(port, function (err) {
    console.log('GraphQL Server is now running on localhost:8080');
  });
