'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const https = requre('https');

const port = 443;

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({string: 'this is a string'});
});

const pKey = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/privkey.pem');
const cert = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es//fullchain.pem');
const ca = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/chain.pem');
const server = https.createServer({key: pKey, cert: cert, ca: ca}, app)

server.listen(port);

// app.listen(port, function() {
//   console.log('listening on port', port)
// });