const readline = require('readline');

const message = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

message.on('line', (input) => {
  const name = input.trim();
  
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  message.close();
});
