const express = require('express');

const app = express();

app.get('/', ((res) => {
  res.send('Hello Holberton School!');
}));

app.listen(1245, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
