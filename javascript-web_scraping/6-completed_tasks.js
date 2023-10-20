#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, res, body) => {
  if (error) console.error(error);

  const data = JSON.parse(body);
  const results = {};

  data.forEach(task => {
    if (task.completed) {
      if (results[task.userId]) results[task.userId]++;
      else results[task.userId] = 1;
    }
  });

  console.log(results);
});
