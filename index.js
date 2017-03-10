var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var pg = require('pg');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files

app.get('/', function(request, response) {
  response.send("HELLO WORLLD");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
