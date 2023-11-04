const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const database = process.argv[2] || 'database.csv';

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(database)
      .then((data) => {
        const { students } = data;
        const response = `This is the list of our students\n
          Number of students: ${data.totalStudents}\n
          Number of students in CS: ${students.CS.count}. List: ${students.CS.list.join(', ')}\n
          Number of students in SWE: ${students.SWE.count}. List: ${students.SWE.list.join(', ')}`;
        res.end(response);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
