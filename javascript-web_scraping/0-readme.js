#!/usr/bin/node

const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
