var graphql = require ('graphql').graphql  
var express = require('express')  
var graphQLHTTP = require('express-graphql')  
var Schema = require('./schema')  

var port = process.env.PORT || 8080;

var query = 'query { talks { title, speaker } }'
graphql(Schema, query).then( function(result) {
  console.log(JSON.stringify(result,null," "));
});

var app = express();

app.use('/graphql', graphQLHTTP({
    schema: Schema,
    pretty: true
}));

app.use('/', (req, res) => {
    res.json('Try /graphql to test your queries!');
});


const server = app.listen(port, function (err) {
    const { port } = server.address();
    console.info('GraphQL Server is now running on localhost:8080');
});
