#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, res, body) => {
  if (error) console.error(error);
  else {
    const data = JSON.parse(body);
    let i = 0;
    let count = 0;
    while (data.results[i]) {
      data.results[i].characters.forEach((pj) => {
        if (pj.endsWith('/18/')) count++;
      });
      i++;
    }
    console.log(count);
  }
});
