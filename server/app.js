var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var vhost = require('vhost');


var app = express();
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(vhost('boogiebox.alexmoor.es', require('/var/www/boogie-box/server/app.js').app));

app.get('/', function(req, res) {
  res.json({string: 'this is a string'});
});





var port = 90;
app.listen(port, function() {
  console.log('listening on port', port)
});