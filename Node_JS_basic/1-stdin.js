const readline = require('readline');

const message = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

message.question('Welcome to Holberton School, what is your name?\n', (res) => {
  console.log(`Your name is: ${res}`);
  console.log('This important software is now closing');
  message.close();
});
