'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const https = require('https');

const port = 443;

const app = express();

const httpRedirect = express();
httpRedirect.get('*', (req, res) => {
  res.redirect('https://alexmoor.es' + req.url);
  console.log('HTTP request made, redirected to HTTPS');
});
httpRedirect.listen(80);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({string: 'this is a string'});
});

const pKey = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/privkey.pem');
const cert = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es//fullchain.pem');
const ca = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/chain.pem');
const server = https.createServer({key: pKey, cert: cert, ca: ca}, app)

server.listen(port, () => {
  console.log('Securely listening on port', port);
});