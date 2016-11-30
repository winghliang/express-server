var express = require('express');

// create express app
var app = express();

// Enable CORS Headers allowing "*" origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// create routes, which are defined in routes.js file in the server folder
var routes = require('./server/routes.js');

// pass in app to routes
routes(app);

// listen on port 3000
app.listen(3000, function(){
  console.log('Express server is running on port 3000');
});
