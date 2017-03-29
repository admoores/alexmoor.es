var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({string: 'this is a string'});
});





var port = 90;
app.listen(port, function() {
  console.log('listening on port', port)
});