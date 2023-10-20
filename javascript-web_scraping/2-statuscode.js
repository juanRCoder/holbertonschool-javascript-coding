#!/usr/bin/node

const request = require('request');

const path = process.argv[2];

request(path, (error, res, body) => {
  if (error) console.error(error);
  else console.log(`code: ${res.statusCode}`);
});
