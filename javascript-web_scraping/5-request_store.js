#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, res, body) => {
  if (error) console.error(error);
  else {
    fs.writeFile(path, body, 'utf-8', (e) => {
      if (e) console.error(e);
    });
  }
});
