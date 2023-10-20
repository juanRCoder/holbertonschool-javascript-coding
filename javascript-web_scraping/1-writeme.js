#!/usr/bin/node

const fs = require('fs');

const path = process.argv[2];
const insertText = process.argv[3];

fs.writeFile(path, insertText, 'utf-8', (err) => {
  if (err) console.error(err);
});
