'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const https = require('https');

morgan(':response-time ms');

const pKey = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/privkey.pem');
const cert = fs.readFileSync('/etc/letsencrypt/live/alexmoor.es/fullchain.pem');

const port = 8081;

app.use((null, null, next) => {
  console.log('Request at:', new Date().JSON());
});
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({string: 'this is a string'});
});

const server = https.createServer({key: pKey, cert: cert}, app)

server.listen(port, () => {
  console.log('Securely listening on port', port);
});