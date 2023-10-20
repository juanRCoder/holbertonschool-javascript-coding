#!/usr/bin/node

const request = require('request');

const title = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${title}`;

request(url, (error, res, body) => {
  if (error) console.error(error);
  else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
