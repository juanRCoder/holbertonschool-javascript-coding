const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const databaseFile = process.argv[2] || 'database.csv';

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(databaseFile)
      .then((data) => {
        const { students } = data;
        const response = `This is the list of our students\nNumber of students: ${
          data.totalStudents
        }\nNumber of students in CS: ${students.CS.count}. List: ${students.CS.list.join(', ')}\nNumber of students in SWE: ${
          students.SWE.count
        }. List: ${students.SWE.list.join(', ')}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
